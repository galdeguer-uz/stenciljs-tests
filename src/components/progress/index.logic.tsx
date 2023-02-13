import { Component, Prop, h, Element, State, Watch, Host } from '@stencil/core';

import COMPONENT_ID from './constants';

@Component({
  tag: 'tlk-progress',
  styleUrl: 'index.styles.css',
  shadow: { 
    delegatesFocus: true,
  }
})
export class TlkProgress {
  constructor() {
    Object.defineProperty(this.self, 'COMPONENT_ID', {
      value: COMPONENT_ID,
      configurable: false,
      writable: false,
    });
  }

  static COMPONENT_ID: string = COMPONENT_ID;

  private calculateValueBasedOnMinMax(value: number, min: number, max: number) {
    let valueToUse = value;

    if (valueToUse > max) {
      valueToUse = max;
    } else if (valueToUse < min) {
      valueToUse = min;
    }
  
    return ((valueToUse - min) * 100) / (max - min);
  }

  private getAriaAttributes() {
    if (!this.indeterminate) {
      return {
        'aria-valuenow': this.value || this.min,
        'aria-valuemin': this.min,
        'aria-valuemax': this.max,
      };
    }

    return {};
  }

  @Prop() theme: any;

  @Prop() indeterminate: boolean = false;
  @Prop() min: number = 0;
  @Prop() max: number = 100;
  @Prop() value: number = 0;

  @Element() self: HTMLElement;

  @Watch('indeterminate')
  indeterminateChangeHandler(newIndeterminate, oldIndeterminate) {
    const progressBarElement: HTMLDivElement = this.self.shadowRoot.querySelector('.tlk-progress__bar');

    if (!newIndeterminate) {
      progressBarElement.style.width = `${this.calculateValueBasedOnMinMax(this.value, this.min, this.max)}%`;
    } else if (oldIndeterminate && !newIndeterminate) {
      progressBarElement.style.width = '';
    }
  }

  componentDidLoad() {
    if (!this.indeterminate) {
      const progressBarElement: HTMLDivElement = this.self.shadowRoot.querySelector('.tlk-progress__bar');

      progressBarElement.style.width = `${this.calculateValueBasedOnMinMax(this.value, this.min, this.max)}%`;
    }
  }

  render() {
    return (
      <Host>
        {this.theme && (<style>{this.theme}</style>)}
        <div
          role="progressbar"
          class="tlk-progress"
          tabIndex={0}
          data-indeterminate={this.indeterminate}
          {...this.getAriaAttributes()}
        >
          <div class="tlk-progress__bar" />
        </div>
      </Host>
    );
  }
}
