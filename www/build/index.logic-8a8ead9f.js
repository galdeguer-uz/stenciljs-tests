import { r as registerInstance, e as createEvent, h, f as Host, g as getElement } from './index-4012631a.js';

const indexStylesCss = ".tlk-button{align-items:center;display:inline-flex;flex:0 0 auto;justify-content:center;overflow:hidden;position:relative;text-align:center;user-select:none;vertical-align:middle;white-space:nowrap}button:disabled{cursor:not-allowed}button:not(:disabled){cursor:pointer}button:not(:disabled):hover{text-decoration:none}button:not(:disabled):focus{outline:0}";

const COMPONENT_ID = 'Toolkit.Button';
let TlkButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mounted = createEvent(this, "mounted", 7);
    Object.defineProperty(this.self, 'COMPONENT_ID', {
      value: COMPONENT_ID,
      configurable: false,
      writable: false,
    });
  }
  mountedHandler() {
    this.mounted.emit(this.self);
  }
  componentDidLoad() {
    const newStyle = document.createElement('style');
    newStyle.appendChild(document.createTextNode(this.theme));
    const allChildren = Array.from(this.self.shadowRoot.children);
    const [lastStylesTag] = allChildren.filter((each) => {
      const tagName = each.tagName.toLowerCase();
      return tagName === 'style';
    }).reverse();
    if (lastStylesTag) {
      /* Insert the styles from theme just after the last style tag */
      this.self.shadowRoot.insertBefore(newStyle, lastStylesTag.nextElementSibling);
    }
    /* Call the onMounted callback */
    this.mountedHandler();
  }
  render() {
    return (h(Host, null, h("button", { class: "tlk-button" }, h("slot", null))));
  }
  get self() { return getElement(this); }
};
TlkButton.COMPONENT_ID = COMPONENT_ID;
;
TlkButton.style = indexStylesCss;

export { TlkButton as T };
