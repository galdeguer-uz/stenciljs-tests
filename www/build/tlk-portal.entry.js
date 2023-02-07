import { r as registerInstance, h, e as Host, g as getElement } from './index-740e01dd.js';

const indexStylesCss = ".tlk-portal__content{padding:10px}";

let TlkPortal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    /* Check if it's inside another tlk-portal */
    let containerToAttach = this.self.parentElement.closest('tlk-portal');
    /* If we have the container prop defined, use it */
    if (this.container) {
      containerToAttach = this.container;
    }
    /* Move the portal element into the container */
    this.attachPortalTo(containerToAttach);
  }
  componentDidLoad() {
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
TlkPortal.style = indexStylesCss;

export { TlkPortal as tlk_portal };
