import { r as registerInstance, h, e as Host, g as getElement } from './index-740e01dd.js';

const extendStyles = (styles, nodes) => {
  nodes.forEach((eachChild) => {
    if (eachChild['COMPONENT_ID']) {
      const stylesByComponent = styles[eachChild['COMPONENT_ID']];
      eachChild['theme'] = stylesByComponent;
    }
    extendStyles(styles, eachChild.childNodes);
  });
};
let TlkThemeManager = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.styles = {};
    this.onMounted = () => { };
  }
  componentWillLoad() {
    extendStyles(this.styles, this.self.childNodes);
  }
  componentDidLoad() {
    /* Call the onMounted callback */
    this.onMounted(this.self);
  }
  render() {
    return (h(Host, { class: "tlk-theme-manager" }, h("slot", null)));
  }
  get self() { return getElement(this); }
};

export { TlkThemeManager as tlk_theme_manager };
