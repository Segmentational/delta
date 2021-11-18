import * as React from 'react';

function SvgSimpleBarGraphIcon(props) {
  return (
    <svg width={40} height={32} {...props}>
      <path
        d="M0 0h1.111v32H0zm31.111 2.963h1.111V32h-1.111zM7.778 19.259h1.111V32H7.778zm7.778-7.407h1.111V32h-1.111zM38.889 26.37H40V32h-1.111zM23.333 14.222h1.111V32h-1.111z"
        fill="#0062FF"
      />
    </svg>
  );
}

export default SvgSimpleBarGraphIcon;
