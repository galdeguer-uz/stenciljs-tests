import { Component, Prop, h, Element, State, Watch, Event, EventEmitter } from '@stencil/core';

import COMPONENT_ID from './constants';

export type PlacementProp = 'top' | 'bottom' | 'left' | 'right';

const isDefinedAndNotNull = param => typeof param !== 'undefined' && param !== null;

@Component({
  tag: 'tlk-checkbox',
  styleUrl: 'index.styles.css',
  shadow: true,
})
export class TlkCheckbox {
  constructor() {
    Object.defineProperty(this.self, 'COMPONENT_ID', {
      value: COMPONENT_ID,
      configurable: false,
      writable: false,
    });
  }

  @Prop() theme: any;
  @Prop() checkboxId: string;
  @Prop() checked: boolean;
  @Prop() defaultChecked: boolean;
  @Prop() invalid: boolean = false;
  @Prop() placement: PlacementProp = 'right';

  @Event() checkboxChanged: EventEmitter;

  @State() stateChecked: boolean = (() => {
    if (isDefinedAndNotNull(this.defaultChecked)) {
      return this.defaultChecked;
    }

    if (isDefinedAndNotNull(this.checked)) {
      return this.checked;
    }
    
    return false;
  })();

  @Element() self: HTMLElement;

  @Watch('checked')
  checkedWatcher(newChecked) {
    this.stateChecked = newChecked;
  }

  static COMPONENT_ID: string = COMPONENT_ID;

  private isControlledCheckbox: boolean = (() => {
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

  onChangeHandler = (event) => {
    const newChecked: boolean = !this.stateChecked;

    if (!this.isControlledCheckbox) {
      this.stateChecked = newChecked;
    }

    this.checkboxChanged.emit({ checked: newChecked, event });

    // onChange({ checked: newChecked, name, event });
  }

  render() {
    return (
      <label class="tlk-checkbox" data-placement={this.placement}>
        <input id={this.checkboxId} aria-invalid={this.invalid} class="tlk-checkbox__input" type="checkbox" defaultChecked={this.stateChecked} onChange={this.onChangeHandler} />
        <div class="tlk-checkbox__icon-wrapper" aria-hidden="true">
          <svg class="tlk-checkbox__icon" viewBox="0 0 14 14" role="presentation">
            <g>
              <polygon points="5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039" />
            </g>
          </svg>
        </div>
        <label htmlFor={this.checkboxId} class="tlk-checkbox__label" data-placement={this.placement}>
          <slot />
        </label>
      </label>
    );
  }
}
