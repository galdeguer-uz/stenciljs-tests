import { r as registerInstance, h, e as Host, g as getElement } from './index-740e01dd.js';

const indexStylesCss = "button{appearance:none;background-color:red}";

const COMPONENT_ID = 'Toolkit.Button';
let TlkButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onMounted = () => { };
    Object.defineProperty(this.self, 'COMPONENT_ID', {
      value: COMPONENT_ID,
      configurable: false,
      writable: false,
    });
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
    this.onMounted(this.self);
  }
  render() {
    return (h(Host, { class: "tlk-button" }, h("button", null, h("slot", null))));
  }
  get self() { return getElement(this); }
};
TlkButton.COMPONENT_ID = COMPONENT_ID;
;
TlkButton.style = indexStylesCss;

export { TlkButton as T };
