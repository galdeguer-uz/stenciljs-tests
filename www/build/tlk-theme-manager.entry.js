import { r as registerInstance, h, e as Host, g as getElement } from './index-6f8a5f60.js';

const COMPONENT_ID = 'Toolkit.ThemeManager';

const extendStyles = (styles, nodes) => {
  nodes.forEach((eachChild) => {
    if (eachChild['COMPONENT_ID']) {
      const stylesByComponent = styles[eachChild['COMPONENT_ID']];
      if (stylesByComponent) {
        eachChild['theme'] = stylesByComponent;
        extendStyles(styles, eachChild.childNodes);
      }
      else if (eachChild['COMPONENT_ID'] === COMPONENT_ID) {
        let newStyles = styles;
        if (eachChild['styles'] && !eachChild['avoidInheritStyles']) {
          const allKeys = Object.keys(eachChild['styles']);
          const distinctKeys = [...new Set(allKeys)];
          newStyles = distinctKeys.reduce((accumulator, currentValue) => (Object.assign(Object.assign({}, accumulator), { [currentValue]: `${styles[currentValue]}${eachChild['styles'][currentValue]}` })), {});
          eachChild['styles'] = newStyles;
        }
      }
    }
    else {
      extendStyles(styles, eachChild.childNodes);
    }
  });
};

let TlkThemeManager = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.avoidInheritStyles = false;
    this.styles = {};
    this.onMounted = () => { };
    Object.defineProperty(this.self, 'COMPONENT_ID', {
      value: COMPONENT_ID,
      configurable: false,
      writable: false,
    });
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
TlkThemeManager.COMPONENT_ID = COMPONENT_ID;

export { TlkThemeManager as tlk_theme_manager };
