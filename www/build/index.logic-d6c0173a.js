import { r as registerInstance, h, e as Host, g as getElement } from './index-6f8a5f60.js';

const COMPONENT_ID = 'Toolkit.Progress';

const indexStylesCss = ".tlk-progress{background-color:#f3f3f3;border-radius:9999px;display:inline-flex;height:16px;overflow:hidden;position:relative;width:100%}.tlk-progress:focus-visible{outline:2px solid blue}.tlk-progress .tlk-progress__bar{align-items:center;background-color:blue;color:#fff;display:flex;height:100%;justify-content:center}.tlk-progress[data-indeterminate] .tlk-progress__bar{animation:1.5s ease 0s infinite normal none running indeterminateAnimation;background:linear-gradient(to right, transparent 0%, blue 50%, transparent 100%);position:absolute;width:50%;will-change:left}@keyframes indeterminateAnimation{0%{left:-50%}100%{left:100%}}";

let TlkProgress = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.indeterminate = false;
    this.min = 0;
    this.max = 100;
    this.value = 0;
    Object.defineProperty(this.self, 'COMPONENT_ID', {
      value: COMPONENT_ID,
      configurable: false,
      writable: false,
    });
  }
  calculateValueBasedOnMinMax(value, min, max) {
    let valueToUse = value;
    if (valueToUse > max) {
      valueToUse = max;
    }
    else if (valueToUse < min) {
      valueToUse = min;
    }
    return ((valueToUse - min) * 100) / (max - min);
  }
  getAriaAttributes() {
    if (!this.indeterminate) {
      return {
        'aria-valuenow': this.value || this.min,
        'aria-valuemin': this.min,
        'aria-valuemax': this.max,
      };
    }
    return {};
  }
  indeterminateChangeHandler(newIndeterminate, oldIndeterminate) {
    const progressBarElement = this.self.shadowRoot.querySelector('.tlk-progress__bar');
    if (!newIndeterminate) {
      progressBarElement.style.width = `${this.calculateValueBasedOnMinMax(this.value, this.min, this.max)}%`;
    }
    else if (oldIndeterminate && !newIndeterminate) {
      progressBarElement.style.width = '';
    }
  }
  componentDidLoad() {
    if (!this.indeterminate) {
      const progressBarElement = this.self.shadowRoot.querySelector('.tlk-progress__bar');
      progressBarElement.style.width = `${this.calculateValueBasedOnMinMax(this.value, this.min, this.max)}%`;
    }
  }
  render() {
    return (h(Host, null, this.theme && (h("style", null, this.theme)), h("div", Object.assign({ role: "progressbar", class: "tlk-progress", tabIndex: 0, "data-indeterminate": this.indeterminate }, this.getAriaAttributes()), h("div", { class: "tlk-progress__bar" }, h("slot", null)))));
  }
  static get delegatesFocus() { return true; }
  get self() { return getElement(this); }
  static get watchers() { return {
    "indeterminate": ["indeterminateChangeHandler"]
  }; }
};
TlkProgress.COMPONENT_ID = COMPONENT_ID;
TlkProgress.style = indexStylesCss;

export { TlkProgress as T };
