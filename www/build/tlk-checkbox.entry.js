import { r as registerInstance, f as createEvent, h, g as getElement } from './index-6f8a5f60.js';

const COMPONENT_ID = 'Toolkit.Checkbox';

const indexStylesCss = ".tlk-checkbox{align-items:center;display:inline-flex;line-height:1;position:relative;vertical-align:middle}.tlk-checkbox[data-placement=\"right\"]{flex-direction:row}.tlk-checkbox[data-placement=\"left\"]{flex-direction:row-reverse}.tlk-checkbox[data-placement=\"top\"]{flex-direction:column-reverse}.tlk-checkbox[data-placement=\"bottom\"]{flex-direction:column}.tlk-checkbox .tlk-checkbox__input{border:0;clip:rect(0 0 0 0);clip:rect(0px, 0px, 0px, 0px);clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.tlk-checkbox .tlk-checkbox__icon-wrapper{align-items:center;border:1px solid #b6b6b6;border-radius:4px;color:#fff;cursor:pointer;display:inline-flex;flex-shrink:0;height:16px;justify-content:center;transition:background-color 120ms ease 0s, border-color 120ms ease 0s;user-select:none;width:16px}.tlk-checkbox .tlk-checkbox__icon-wrapper .tlk-checkbox__icon{display:inline-block;flex-shrink:0;transform:scale(0.5);vertical-align:middle;width:100%;}.tlk-checkbox .tlk-checkbox__icon-wrapper .tlk-checkbox__icon g polygon{fill:#fff;fill-opacity:0;transition:fill-opacity 240ms ease 0s, fill 240ms ease 0s}.tlk-checkbox:hover>.tlk-checkbox__input:not(:disabled):not([checked])+.tlk-checkbox__icon-wrapper .tlk-checkbox__icon g polygon{fill:#b6b6b6;fill-opacity:1}.tlk-checkbox>.tlk-checkbox__input[checked]+.tlk-checkbox__icon-wrapper .tlk-checkbox__icon g polygon{fill:#fff;fill-opacity:1}.tlk-checkbox>.tlk-checkbox__input[aria-invalid=\"true\"]+.tlk-checkbox__icon-wrapper{border-color:#f00314}.tlk-checkbox:hover>.tlk-checkbox__input[aria-invalid=\"true\"]:not([checked])+.tlk-checkbox__icon-wrapper{border-color:#b6b6b6}.tlk-checkbox>.tlk-checkbox__input[aria-invalid=\"true\"]:disabled+.tlk-checkbox__icon-wrapper,.tlk-checkbox>.tlk-checkbox__input:disabled+.tlk-checkbox__icon-wrapper{background-color:#b6b6b6;border-color:#b6b6b6;cursor:not-allowed}.tlk-checkbox>.tlk-checkbox__input[checked]+.tlk-checkbox__icon-wrapper{background-color:#314fff;border-color:#1838f2}.tlk-checkbox>.tlk-checkbox__input[aria-invalid=\"true\"][checked]+.tlk-checkbox__icon-wrapper{background-color:#f00314;border-color:#ad020e}.tlk-checkbox>.tlk-checkbox__input[aria-invalid=\"true\"][checked]:disabled+.tlk-checkbox__icon-wrapper,.tlk-checkbox>.tlk-checkbox__input[checked]:disabled+.tlk-checkbox__icon-wrapper{background-color:#b6b6b6;border-color:#b6b6b6}.tlk-checkbox .tlk-checkbox__label{color:#5b6c7f;cursor:pointer;font-size:14px;user-select:none;transition:color 120ms ease 0s}.tlk-checkbox .tlk-checkbox__label[data-placement=\"right\"]{padding-left:8px}.tlk-checkbox .tlk-checkbox__label[data-placement=\"left\"]{padding-right:8px}.tlk-checkbox .tlk-checkbox__label[data-placement=\"top\"]{padding-bottom:8px}.tlk-checkbox .tlk-checkbox__label[data-placement=\"bottom\"]{padding-top:8px}.tlk-checkbox>.tlk-checkbox__input[aria-invalid=\"true\"]~.tlk-checkbox__label,.tlk-checkbox>.tlk-checkbox__input[aria-invalid=\"true\"][checked]~.tlk-checkbox__label{color:#f00314}.tlk-checkbox:hover>.tlk-checkbox__input[aria-invalid=\"true\"]:not([checked])~.tlk-checkbox__label{color:#5b6c7f}.tlk-checkbox>.tlk-checkbox__input[aria-invalid=\"true\"]:disabled~.tlk-checkbox__label,.tlk-checkbox>.tlk-checkbox__input:disabled~.tlk-checkbox__label,.tlk-checkbox>.tlk-checkbox__input[aria-invalid=\"true\"][checked]:disabled~.tlk-checkbox__label,.tlk-checkbox>.tlk-checkbox__input[checked]:disabled~.tlk-checkbox__label{color:#b6b6b6;cursor:not-allowed}";

const isDefinedAndNotNull = param => typeof param !== 'undefined' && param !== null;
let TlkCheckbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.checkboxChanged = createEvent(this, "checkboxChanged", 7);
    this.invalid = false;
    this.placement = 'right';
    this.stateChecked = (() => {
      if (isDefinedAndNotNull(this.defaultChecked)) {
        return this.defaultChecked;
      }
      if (isDefinedAndNotNull(this.checked)) {
        return this.checked;
      }
      return false;
    })();
    this.isControlledCheckbox = (() => {
      if (isDefinedAndNotNull(this.defaultChecked) && !isDefinedAndNotNull(this.checked)) {
        return false;
      }
      if (!isDefinedAndNotNull(this.defaultChecked) && isDefinedAndNotNull(this.checked)) {
        return true;
      }
      if (!isDefinedAndNotNull(this.defaultChecked) && !isDefinedAndNotNull(this.checked)) {
        return false;
      }
      console.error(`Warning: tlk-checkbox contains an input with both checked and defaultChecked props.
      Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both).
      Decide between using a controlled or uncontrolled input element and remove one of these props.`);
      return false;
    })();
    this.onChangeHandler = (event) => {
      const newChecked = !this.stateChecked;
      if (!this.isControlledCheckbox) {
        this.stateChecked = newChecked;
      }
      this.checkboxChanged.emit({ checked: newChecked, event });
      // onChange({ checked: newChecked, name, event });
    };
    Object.defineProperty(this.self, 'COMPONENT_ID', {
      value: COMPONENT_ID,
      configurable: false,
      writable: false,
    });
  }
  checkedWatcher(newChecked) {
    this.stateChecked = newChecked;
  }
  render() {
    return (h("label", { class: "tlk-checkbox", "data-placement": this.placement }, h("input", { id: this.checkboxId, "aria-invalid": this.invalid, class: "tlk-checkbox__input", type: "checkbox", defaultChecked: this.stateChecked, onChange: this.onChangeHandler }), h("div", { class: "tlk-checkbox__icon-wrapper", "aria-hidden": "true" }, h("svg", { class: "tlk-checkbox__icon", viewBox: "0 0 14 14", role: "presentation" }, h("g", null, h("polygon", { points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039" })))), h("label", { htmlFor: this.checkboxId, class: "tlk-checkbox__label", "data-placement": this.placement }, h("slot", null))));
  }
  get self() { return getElement(this); }
  static get watchers() { return {
    "checked": ["checkedWatcher"]
  }; }
};
TlkCheckbox.COMPONENT_ID = COMPONENT_ID;
TlkCheckbox.style = indexStylesCss;

export { TlkCheckbox as tlk_checkbox };
