import { r as registerInstance, h, e as Host, g as getElement } from './index-6f8a5f60.js';

const COMPONENT_ID = 'Toolkit.Portal';

const indexStylesCss = ".tlk-portal__content{padding:10px}";

let TlkPortal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onMounted = () => { };
    Object.defineProperty(this.self, 'COMPONENT_ID', {
      value: COMPONENT_ID,
      configurable: false,
      writable: false,
    });
  }
  attachPortalTo(container) {
    let containerToUse;
    if (container) {
      containerToUse = container;
    }
    else {
      containerToUse = document.body;
    }
    containerToUse.appendChild(this.self);
  }
  async appendTo(newContainer) {
    this.attachPortalTo(newContainer);
  }
  watchContainerHandler() {
    this.attachPortalTo(this.container);
  }
  componentWillLoad() {
    var _a;
    /* Check if it's inside another tlk-portal */
    let containerToAttach = (_a = this.self.parentElement) === null || _a === void 0 ? void 0 : _a.closest('tlk-portal');
    /* If we have the container prop defined, use it */
    if (this.container) {
      containerToAttach = this.container;
    }
    /* Move the portal element into the container */
    this.attachPortalTo(containerToAttach);
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
    return (h(Host, { class: "tlk-portal" }, h("div", { class: "tlk-portal__content", onAnimationStart: this.onAnimationStart, onAnimationEnd: this.onAnimationEnd, onTransitionEnd: this.onTransitionEnd }, h("slot", null))));
  }
  get self() { return getElement(this); }
  static get watchers() { return {
    "container": ["watchContainerHandler"]
  }; }
};
TlkPortal.COMPONENT_ID = COMPONENT_ID;
TlkPortal.style = indexStylesCss;

export { TlkPortal as tlk_portal };
