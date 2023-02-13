import { r as registerInstance, h, e as Host, g as getElement } from './index-f7c24bda.js';

const COMPONENT_ID = 'Toolkit.Progress';

const indexStylesCss = ":host{background-color:#f3f3f3;border-radius:9999px;display:inline-flex;height:16px;overflow:hidden;position:relative;width:100%}:host .tlk-progress__bar{background-color:blue;height:100%}:host .tlk-progress__bar[data-indeterminate]{animation:1.5s ease 0s infinite normal none running indeterminateAnimation;background:linear-gradient(to right, transparent 0%, blue 50%, transparent 100%);position:absolute;width:50%;will-change:left}@keyframes indeterminateAnimation{0%{left:-50%}100%{left:100%}}";

let TlkProgress = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.indeterminate = false;
    this.min = 0;
    this.max = 100;
    this.value = 0;
    this.stateValue = this.calculateValueBasedOnMinMax(this.value, this.min, this.max);
    Object.defineProperty(this.self, 'COMPONENT_ID', {
      value: COMPONENT_ID,
      configurable: false,
      writable: false,
    });
  }
  calculateValueBasedOnMinMax(value, min, max) {
    return ((value - min) * 100) / (max - min);
  }
  valueChangeHandler(newValue) {
    this.stateValue = this.calculateValueBasedOnMinMax(newValue, this.min, this.max);
  }
  maxChangeHandler(newMax) {
    if (this.stateValue > newMax) {
      this.stateValue = newMax;
    }
    else {
      this.stateValue = this.calculateValueBasedOnMinMax(this.stateValue, this.min, newMax);
    }
  }
  minChangeHandler(newMin) {
    if (this.stateValue < newMin) {
      this.stateValue = newMin;
    }
    else {
      this.stateValue = this.calculateValueBasedOnMinMax(this.stateValue, newMin, this.max);
    }
  }
  indeterminateChangeHandler(newIndeterminate, oldIndeterminate) {
    const progressBarElement = this.self.shadowRoot.querySelector('.tlk-progress__bar');
    if (!newIndeterminate) {
      progressBarElement.style.width = `${this.stateValue}%`;
    }
    else if (oldIndeterminate && !newIndeterminate) {
      progressBarElement.style.width = '';
    }
  }
  componentDidLoad() {
    if (this.theme) {
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
    }
    if (!this.indeterminate) {
      const progressBarElement = this.self.shadowRoot.querySelector('.tlk-progress__bar');
      progressBarElement.style.width = `${this.stateValue}%`;
    }
  }
  render() {
    return (h(Host, null, h("div", { role: "progressbar", class: "tlk-progress", "data-indeterminate": this.indeterminate, "aria-valuenow": this.value, "aria-valuemin": this.min, "aria-valuemax": this.max }, h("div", { class: "tlk-progress__bar" }))));
  }
  get self() { return getElement(this); }
  static get watchers() { return {
    "value": ["valueChangeHandler"],
    "max": ["maxChangeHandler"],
    "min": ["minChangeHandler"],
    "indeterminate": ["indeterminateChangeHandler"]
  }; }
};
TlkProgress.COMPONENT_ID = COMPONENT_ID;
TlkProgress.style = indexStylesCss;

export { TlkProgress as T };
