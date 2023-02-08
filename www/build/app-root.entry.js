import { r as registerInstance, h } from './index-1d28747c.js';
import { T as TlkButton } from './index.logic-d005293a.js';

const buttonStyles$1 = {
  [TlkButton.COMPONENT_ID]: `
    :host {
      --color-action500: #4363f9;
      --color-action600: #304ad6;
      --color-action700: #2136b3;
      --color-white: #fff;
    }

    button {
      border: 1px solid transparent;
      box-sizing: border-box;
      border-radius: 4px;

      font-size: 14px;
      line-height: 24px;
      height: 32px;
      padding: 4px 12px;

      background-color: var(--color-action500);
      border-color: var(--color-action500);
      color: var(--color-white);
    }

    button:disabled {
      color: var(--color-white);
      background-color: var(--color-action500);
      border-color: var(--color-action500);
      opacity: 0.24;
    }

    button:not(:disabled):hover {
      color: var(--color-white);
      background-color: var(--color-action600);
      border-color: var(--color-action600);
    }

    button:not(:disabled):active {
      color: var(--color-white);
      background-color: var(--color-action700);
      border-color: var(--color-action700);
    }
  `,
};

const allUzStyles$1 = Object.assign({}, buttonStyles$1);

const buttonStyles = {
  [TlkButton.COMPONENT_ID]: `
    :host {
      --color-action500: #305cfd;
      --color-action600: #2648e2;
      --color-action700: #192fc1;
      --color-white: #fff;
    }

    button {
      border: 1px solid transparent;
      box-sizing: border-box;
      border-radius: 4px;

      font-size: 14px;
      line-height: 24px;
      height: 32px;
      padding: 4px 12px;

      background-color: var(--color-action500);
      border-color: var(--color-action500);
      color: var(--color-white);
    }

    button:disabled {
      color: var(--color-white);
      background-color: var(--color-action500);
      border-color: var(--color-action500);
      opacity: 0.24;
    }

    button:not(:disabled):hover {
      color: var(--color-white);
      background-color: var(--color-action600);
      border-color: var(--color-action600);
    }

    button:not(:disabled):active {
      color: var(--color-white);
      background-color: var(--color-action700);
      border-color: var(--color-action700);
    }
  `,
};

const allUzStyles = Object.assign({}, buttonStyles);

const appRootCss = "header{background:#5851ff;color:white;height:56px;display:flex;align-items:center;box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.26)}h1{font-size:1.4rem;font-weight:500;color:#fff;padding:0 12px}";

let AppRoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("main", null, h("div", { style: { padding: '40px', display: 'flex', flexDirection: 'column', gap: '10px' } }, h("div", null, h("tlk-button", null, "Unstyled button")), h("div", null, h("tlk-theme-manager", { styles: allUzStyles$1 }, h("tlk-button", null, "UZ Button"))), h("div", null, h("tlk-theme-manager", { styles: allUzStyles }, h("tlk-button", null, "UT Button")))))));
  }
};
AppRoot.style = appRootCss;

export { AppRoot as app_root };
