import { r as registerInstance, h } from './index-740e01dd.js';
import { T as TlkButton } from './index.logic-1bb40cc4.js';

const appRootCss = "header{background:#5851ff;color:white;height:56px;display:flex;align-items:center;box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.26)}h1{font-size:1.4rem;font-weight:500;color:#fff;padding:0 12px}";

const styles = {
  [TlkButton['COMPONENT_ID']]: `
    button {
      font-size: 24px;
    }
  `,
};
let AppRoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("main", null, h("tlk-theme-manager", { styles: styles }, h("tlk-button", null, "Test"), h("div", null, "Testing", h("tlk-button", null, "Test 2"))), h("tlk-portal", { id: "portal-1", onMounted: (portalElement) => console.log('Mounted => ', portalElement) }, h("div", null, "Portal 1"), h("tlk-portal", { id: "portal-11", onMounted: (portalElement) => console.log('Mounted => ', portalElement) }, h("div", null, "Portal 11"), h("tlk-portal", { id: "portal-111", container: document.body, onMounted: (portalElement) => console.log('Mounted => ', portalElement) }, h("div", null, "Portal 111 but with custom container")))))));
  }
};
AppRoot.style = appRootCss;

export { AppRoot as app_root };
