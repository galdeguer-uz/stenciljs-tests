import { r as registerInstance, h, e as Host, g as getElement } from './index-6f8a5f60.js';

const COMPONENT_ID = 'Toolkit.CircularProgress';

const indexStylesCss = ".tlk-circular-progress{height:120px;width:120px}.tlk-circular-progress .tlk-circular-progress__bar{display:inline-flex;vertical-align:bottom;width:100%;height:100%}.tlk-circular-progress .tlk-circular-progress__bar .tlk-circular-progress__background{stroke:rgba(0, 0, 0, 0.25);stroke-width:5px;stroke-dasharray:0;fill:none}.tlk-circular-progress .tlk-circular-progress__bar .tlk-circular-progress__path{stroke-width:5px;stroke:blue;fill:none;transform-origin:center center;transform:rotate(-90deg) scaleX(-1)}.tlk-circular-progress[data-indeterminate]{animation:1.5s ease 0s infinite normal none running indeterminateAnimation}@keyframes indeterminateAnimation{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}";

let TlkCircularProgress = class {
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
    const percentage = ((valueToUse - min) * 100) / (max - min);
    return 300 - ((percentage * 300) / 100);
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
  // @Watch('indeterminate')
  // indeterminateChangeHandler(newIndeterminate, oldIndeterminate) {
  //   const progressBarElement: HTMLDivElement = this.self.shadowRoot.querySelector('.tlk-circular-progress__path');
  //   if (!newIndeterminate) {
  //     progressBarElement.style.strokeDashoffset = `${this.calculateValueBasedOnMinMax(this.value, this.min, this.max)}px`;
  //   } else if (oldIndeterminate && !newIndeterminate) {
  //     progressBarElement.style.strokeDashoffset = '';
  //   }
  // }
  componentDidLoad() {
    const progressBarElement = this.self.shadowRoot.querySelector('.tlk-circular-progress__path');
    if (progressBarElement) {
      const length = progressBarElement.getTotalLength();
      progressBarElement.setAttribute('stroke-dasharray', `${length}`);
      if (!this.indeterminate) {
        const boundedValue = Math.min(Math.max(this.value, this.min), this.max);
        const to = length * (1 - ((boundedValue - this.min) / (this.max - this.min)));
        progressBarElement.setAttribute('stroke-dashoffset', `${Math.max(0, to)}`);
      }
      else {
        progressBarElement.setAttribute('stroke-dashoffset', `${length * 0.85}`);
      }
    }
  }
  render() {
    return (h(Host, null, this.theme && (h("style", null, this.theme)), h("div", Object.assign({ role: "progressbar", class: "tlk-circular-progress", tabIndex: 0, "data-indeterminate": this.indeterminate }, this.getAriaAttributes()), h("svg", { class: "tlk-circular-progress__bar", viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "none" }, h("circle", { class: "tlk-circular-progress__background", r: "45", cx: "50", cy: "50" }), h("path", { class: "tlk-circular-progress__path", d: "M5,50a45,45 0 1,0 90,0a45,45 0 1,0 -90,0" })))));
  }
  static get delegatesFocus() { return true; }
  get self() { return getElement(this); }
};
TlkCircularProgress.COMPONENT_ID = COMPONENT_ID;
TlkCircularProgress.style = indexStylesCss;

export { TlkCircularProgress as T };
