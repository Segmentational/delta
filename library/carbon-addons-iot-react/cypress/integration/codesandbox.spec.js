import { settings } from '../../src/constants/Settings';

const { prefix } = settings;

describe('CodeSandbox', () => {
  it(
    'should build and load',
    {
      defaultCommandTimeout: 120000,
    },
    () => {
      // load sandbox
      cy.visit(
        'https://codesandbox.io/s/github/carbon-design-system/carbon-addons-iot-react/tree/next/packages/react/examples/codesandbox'
      );
      // easy check on the title
      cy.title().should('eq', `codesandbox - CodeSandbox`);

      // codesandbox is iframes all the way down.
      //               codesandbox
      //                    |
      //                 iframe <- "rendered preview content goes here if successful"
      //               /         \
      // "Open Sandbox" iframe    "Transpiling" or "Error" iframe <- While it's transpiling a child
      //                             iframe is created to show the tranpiling animations. If it fails,
      //                             an error message is show in this iframe instead of the parent.
      //
      // We first load the main iframe and confirm it has two iframes inside it.
      cy.get('iframe').iframe(() => {
        cy.get('iframe')
          // on the initial load these two iframes are the "Open sandbox" button and the "Transpiling" screen
          .should('have.length', 2)
          .then(($iframes) => {
            // We get the contents of the transpiling screen (via the iframe custom command that can
            // be found in cypress/support/codesandbox), and confirm it is indeed transpiling the
            // modules.
            cy.wrap($iframes[1]).iframe(() => {
              cy.findByText('Transpiling Modules...').should('be.visible');
              // after the transpiling is finished, this text should no longer be visible--we need
              // a long timeout here, because sometimes the rendering can be _very_ slow.
              cy.findByText('Transpiling Modules...').should('not.exist');
            });
          });

        // after the transpiling is finished, we can (from the context of the parent iframe)
        // check for the rendered button to confirm the sandbox successfully loaded.
        cy.findByText('Hello world').should('be.visible').should('have.class', `${prefix}--btn`);
      });
    }
  );
});
