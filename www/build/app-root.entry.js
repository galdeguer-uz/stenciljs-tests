import { r as registerInstance, h } from './index-6f8a5f60.js';
import { T as TlkProgress } from './index.logic-d6c0173a.js';
import { T as TlkCircularProgress } from './index.logic-42b35925.js';
import { T as TlkButton } from './index.logic-d22d904e.js';

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

const appRootCss = "header{background:#5851ff;color:white;height:56px;display:flex;align-items:center;box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.26)}main{padding:20px}h1{font-size:1.4rem;font-weight:500;color:#fff;padding:0 12px}";

const styles = {
  [TlkProgress.COMPONENT_ID]: `
    .tlk-progress {
      background-color: #DDE0E4;
      border-radius: 20px;
      height: 8px;
    }

    .tlk-progress .tlk-progress__bar {
      background-color: #315CFD;
      border-radius: 20px;
    }

    :host([size="md"]) .tlk-progress {
      height: 8px;
    }

    :host([size="lg"]) .tlk-progress {
      height: 16px;
    }
  `,
  [TlkCircularProgress.COMPONENT_ID]: `
    .tlk-circular-progress .tlk-circular-progress__bar .tlk-circular-progress__background  {
      stroke: #dde0e4;
      stroke-width: 10px;
    }

    .tlk-circular-progress .tlk-circular-progress__bar .tlk-circular-progress__path {
      stroke: #315CFD;
      stroke-width: 10px;
    }

    :host([size="md"]) .tlk-circular-progress {
      height: 32px;
      width: 32px;
    }

    :host([size="lg"]) .tlk-circular-progress {
      height: 48px;
      width: 48px;
    }
  `,
};
let AppRoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.myInfo = {};
    this.controlledChecked = false;
    this.onChangeCheckbox = (event) => {
      this.controlledChecked = event.detail.checked;
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onClickHandler() {
    this.myInfo = { test: 111 };
  }
  render() {
    return (h("div", null, h("main", null, h("div", { style: { padding: '40px', display: 'flex', flexDirection: 'column', gap: '10px' } }, h("div", null, h("tlk-button", null, "Unstyled button")), h("div", null, h("tlk-theme-manager", { styles: allUzStyles$1 }, h("tlk-button", null, "UZ Button"))), h("div", null, h("tlk-theme-manager", { styles: allUzStyles }, h("tlk-button", null, "UT Button")))), h("hr", null), h("tlk-provider", { value: this.myInfo }, h("div", null, "Hi! I'm inside the tlk-provider"), h("tlk-consumer", { renderer: (value) => (h("div", null, h("p", null, "Test: ", JSON.stringify(value)))) }), h("button", { onClick: this.onClickHandler }, "Click me")), h("hr", null), h("div", null, h("tlk-checkbox", { checkboxId: "basic-checkbox" }, "Check me!")), h("div", null, h("tlk-checkbox", { checkboxId: "default-checked", defaultChecked: true }, "Default checked!")), h("div", null, h("tlk-checkbox", { checkboxId: "controlled-checkbox", checked: this.controlledChecked, onCheckboxChanged: this.onChangeCheckbox }, "Controlled checkbox!")), h("hr", null), h("div", null, h("label", null, "Circular progress 0%"), h("tlk-circular-progress", null)), h("div", null, h("label", null, "Circular progress 45%"), h("tlk-circular-progress", { value: 45 })), h("div", null, h("label", null, "Circular progress 66%"), h("tlk-circular-progress", { value: 66 })), h("div", null, h("label", null, "Circular progress 100%"), h("tlk-circular-progress", { value: 100 })), h("div", null, h("label", null, "Different min & max (min=15, max=85, value=26)"), h("tlk-circular-progress", { min: 15, max: 85, value: 26 })), h("div", null, h("label", null, "Indeterminate"), h("tlk-circular-progress", { indeterminate: true })), h("div", null, h("label", null, "0% progress"), h("tlk-progress", null)), h("div", null, h("label", null, "25% with label"), h("tlk-progress", { value: 25 }, "25%")), h("div", null, h("label", null, "40% progress"), h("tlk-progress", { value: 40 })), h("div", null, h("label", null, "100% progress"), h("tlk-progress", { value: 100 })), h("div", null, h("label", null, "Different min & max (min=15, max=85, value=26)"), h("tlk-progress", { min: 15, max: 85, value: 26 })), h("div", null, h("label", null, "Indeterminate"), h("tlk-progress", { indeterminate: true })), h("hr", null), h("div", null, h("label", null, "Styled progress using tlk-theme-manager (UT Theme)"), h("tlk-theme-manager", { styles: styles }, h("tlk-progress", { value: 0, size: "md" }), h("tlk-progress", { value: 0, size: "lg" }), h("tlk-progress", { value: 25, size: "md" }), h("tlk-progress", { value: 25, size: "lg" }), h("tlk-progress", { value: 100, size: "md" }), h("tlk-progress", { value: 100, size: "lg" }), h("tlk-circular-progress", { value: 0, size: "md" }), h("tlk-circular-progress", { value: 0, size: "lg" }), h("tlk-circular-progress", { value: 25, size: "md" }), h("tlk-circular-progress", { value: 25, size: "lg" }), h("tlk-circular-progress", { value: 100, size: "md" }), h("tlk-circular-progress", { value: 100, size: "lg" }))))));
  }
};
AppRoot.style = appRootCss;

export { AppRoot as app_root };
