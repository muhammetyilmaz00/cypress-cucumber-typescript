// commands.ts
// cypress/support/e2e.ts

import '@4tw/cypress-drag-drop';

declare global {
  namespace Cypress {
    interface Chainable {
      // Add custom command typings here if needed
    }
    interface ResolvedConfigOptions {
      hideXHRInCommandLog?: boolean;
    }
  }
}
