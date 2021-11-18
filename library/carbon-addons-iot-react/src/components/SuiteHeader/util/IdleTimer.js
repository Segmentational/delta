class IdleTimer {
  constructor({
    timeout = 1800, // 30 minutes
    countdown = 30, // 30 seconds
    cookieName = '_user_inactivity_timeout',
    cookieDomain = '',
    onIdleTimeoutWarning = () => {},
    onIdleTimeout = () => {},
    onRestart = () => {},
  }) {
    // Initialize constants
    this.COOKIE_CHECK_INTERVAL = 1000; // 1 second
    this.ACTIVITY_DEBOUNCE = 500; // 500 milliseconds
    this.COUNTDOWN_START = countdown;
    this.COOKIE_NAME = cookieName;
    this.COOKIE_DOMAIN = cookieDomain;
    this.TIMEOUT = timeout;

    // Set callbacks
    this.onIdleTimeoutWarning = onIdleTimeoutWarning;
    this.onIdleTimeout = onIdleTimeout;
    this.onRestart = onRestart;

    // Bind the user activity event handler to IdleTimer's object (this)
    this.eventHandler = this.debouncedUpdateExpiredTime.bind(this);

    // Start idle user detection
    this.start();
  }

  startIdleUserDetectionInterval() {
    // Push the cookie forward by this.TIMEOUT
    this.updateUserInactivityTimeout();
    // Reset the countdown
    this.countdown = this.COUNTDOWN_START;
    // Make sure we don't stack up setInterval threads
    if (this.intervalHandler) {
      clearInterval(this.intervalHandler);
    }
    // Initialize the setInterval thread
    this.intervalHandler = setInterval(() => {
      // Check if user is idle
      if (this.getUserInactivityTimeout() < Date.now()) {
        // Fire onIdleTimeoutWarning during the countdown, and when countdown reaches zero, fire onIdleTimeout.
        if (this.countdown === 0) {
          this.onIdleTimeout();
          // End the execution of IdleTimer
          this.cleanUp();
        } else {
          this.onIdleTimeoutWarning(this.countdown);
          // Decrease coountdown each time onIdleTimeoutWarning is fired
          this.countdown = this.countdown === 0 ? this.countdown : this.countdown - 1;
        }
      } else if (this.countdown < this.COUNTDOWN_START) {
        // This means that the cookie has been updated by a restart of IdleTimer running in some other tab during the countdown (when onIdleTimeoutWarning was being fired)
        this.onRestart();
        this.countdown = this.COUNTDOWN_START;
      }
    }, this.COOKIE_CHECK_INTERVAL);
  }

  getUserInactivityTimeout() {
    // Read the inactivity timeout cookie
    return parseInt(
      document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=');
        return parts[0] === this.COOKIE_NAME ? decodeURIComponent(parts[1]) : r;
      }, Date.now()),
      10
    );
  }

  setUserInactivityTimeout(timestamp, expires) {
    // Write the inactivity timeout cookie
    document.cookie = `${this.COOKIE_NAME}=${encodeURIComponent(
      timestamp
    )};expires=${expires};path=/;domain=${this.COOKIE_DOMAIN};`;
  }

  updateUserInactivityTimeout() {
    // Cookie will expire in 7 days (this doesn't matter as the cookie is always recreated on user activity and when IdleTimer is restarted)
    const expires = new Date(Date.now() + 6048e5).toUTCString();
    const timestamp = Date.now() + this.TIMEOUT * 1000;
    this.setUserInactivityTimeout(timestamp, expires);
  }

  debouncedUpdateExpiredTime() {
    // Expired time is only updated if inactivity timeout has not been reached
    // Otherwise, the only way to resume inactivity timeout cookie updates is by calling restart()
    if (Date.now() < this.getUserInactivityTimeout()) {
      if (this.debounceTimeoutHandler) {
        clearTimeout(this.debounceTimeoutHandler);
      }
      this.debounceTimeoutHandler = setTimeout(() => {
        this.updateUserInactivityTimeout();
      }, this.ACTIVITY_DEBOUNCE);
    }
  }

  createUserActivityListeners() {
    // Make sure we don't stack up event listeners
    this.cleanUpUserActivityListeners();
    // Listen for mouse and keuboard events
    window.addEventListener('mousemove', this.eventHandler);
    window.addEventListener('mousedown', this.eventHandler);
    window.addEventListener('scroll', this.eventHandler);
    window.addEventListener('keydown', this.eventHandler);
    // Listen for mobile (touch) events
    window.addEventListener('touchstart', this.eventHandler);
    window.addEventListener('touchend', this.eventHandler);
    window.addEventListener('touchmove', this.eventHandler);
    window.addEventListener('touchcancel', this.eventHandler);
  }

  cleanUpUserActivityListeners() {
    // Cleanup all listeners
    window.removeEventListener('mousemove', this.eventHandler);
    window.removeEventListener('mousedown', this.eventHandler);
    window.removeEventListener('scroll', this.eventHandler);
    window.removeEventListener('keydown', this.eventHandler);
    window.removeEventListener('touchstart', this.eventHandler);
    window.removeEventListener('touchend', this.eventHandler);
    window.removeEventListener('touchmove', this.eventHandler);
    window.removeEventListener('touchcancel', this.eventHandler);
  }

  start() {
    // Create the event listeners and start the setInterval that keeps checking for inactivity
    this.createUserActivityListeners();
    this.startIdleUserDetectionInterval();
  }

  restart() {
    this.start();
  }

  cleanUp() {
    clearInterval(this.intervalHandler);
    this.cleanUpUserActivityListeners();
    this.onIdleTimeoutWarning = () => {};
  }
}

export default IdleTimer;
