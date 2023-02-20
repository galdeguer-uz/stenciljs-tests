import { Component, Prop, h, Element, Watch, Host } from '@stencil/core';

import COMPONENT_ID from './constants';

@Component({
  tag: 'tlk-circular-progress',
  styleUrl: 'index.styles.css',
  shadow: { 
    delegatesFocus: true,
  }
})
export class TlkCircularProgress {
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

    const percentage = ((valueToUse - min) * 100) / (max - min);
  
    return 300 - ((percentage * 300) / 100);
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

  @Prop({ reflect: true }) size: string;

  @Prop() indeterminate: boolean = false;
  @Prop() min: number = 0;
  @Prop() max: number = 100;
  @Prop() value: number = 0;

  @Element() self: HTMLElement;

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
    const progressBarElement: SVGPathElement = this.self.shadowRoot.querySelector('.tlk-circular-progress__path');

    if (progressBarElement) {
      const length: number = progressBarElement.getTotalLength();
      progressBarElement.setAttribute('stroke-dasharray', `${length}`);

      if (!this.indeterminate) {
        const boundedValue = Math.min(Math.max(this.value, this.min), this.max);
        const to = length * (1 - ((boundedValue - this.min) / (this.max - this.min)));

        progressBarElement.setAttribute('stroke-dashoffset', `${Math.max(0, to)}`);
      } else {
        progressBarElement.setAttribute('stroke-dashoffset', `${length * 0.85}`);
      }
    }
  }

  render() {
    return (
      <Host>
        {this.theme && (<style>{this.theme}</style>)}
        <div
          role="progressbar"
          class="tlk-circular-progress"
          tabIndex={0}
          data-indeterminate={this.indeterminate}
          {...this.getAriaAttributes()}
        >
          <svg class="tlk-circular-progress__bar" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <circle class="tlk-circular-progress__background" r="45" cx="50" cy="50" />
            <path class="tlk-circular-progress__path" d="M5,50a45,45 0 1,0 90,0a45,45 0 1,0 -90,0" />
          </svg>


          {/* <svg class="tlk-circular-progress__bar" viewBox="0 0 100 100">
            <path class="tlk-circular-progress__trail" d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92" />
            <path class="tlk-circular-progress__path" d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92" />
          </svg> */}
        </div>
      </Host>
    );
  }
}
