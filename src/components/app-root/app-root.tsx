import { Component, h, State } from '@stencil/core';

import { TlkProgress } from '../progress';
import { TlkCircularProgress } from '../circular-progress';

import allUzStyles from '../../themes/uz';
import allUtStyles from '../../themes/ut';

const styles = {
  [TlkProgress.COMPONENT_ID]: `
    .tlk-progress {
      background-color: #DDE0E4;
      border-radius: 20px;
      height: 8px;
    }

    .tlk-progress .tlk-progress__bar {
      background-color: #315CFD;
      border-radius: 20px;
    }

    :host([size="md"]) .tlk-progress {
      height: 8px;
    }

    :host([size="lg"]) .tlk-progress {
      height: 16px;
    }
  `,
  [TlkCircularProgress.COMPONENT_ID]: `
    .tlk-circular-progress .tlk-circular-progress__bar .tlk-circular-progress__background  {
      stroke: #dde0e4;
      stroke-width: 10px;
    }

    .tlk-circular-progress .tlk-circular-progress__bar .tlk-circular-progress__path {
      stroke: #315CFD;
      stroke-width: 10px;
    }

    :host([size="md"]) .tlk-circular-progress {
      height: 32px;
      width: 32px;
    }

    :host([size="lg"]) .tlk-circular-progress {
      height: 48px;
      width: 48px;
    }
  `,
};

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  constructor() {
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  @State() myInfo: object = {};
  @State() controlledChecked: boolean = false;

  onClickHandler() {
    this.myInfo = { test: 111 };
  }

  onChangeCheckbox = (event) => {
    this.controlledChecked = event.detail.checked;
  }

  render() {
    return (
      <div>
        <main>
          <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div>
              <tlk-button>Unstyled button</tlk-button>
            </div>

            <div>
              <tlk-theme-manager styles={allUzStyles}>
                <tlk-button>UZ Button</tlk-button>
              </tlk-theme-manager>
            </div>

            <div>
              <tlk-theme-manager styles={allUtStyles}>
                <tlk-button>UT Button</tlk-button>
              </tlk-theme-manager>
            </div>
          </div>

          <hr />

          <tlk-provider value={this.myInfo}>
            <div>Hi! I'm inside the tlk-provider</div>

            <tlk-consumer
              renderer={(value) => (
                <div>
                  <p>Test: {JSON.stringify(value)}</p>
                </div>
              )}
            />

            <button onClick={this.onClickHandler}>Click me</button>
          </tlk-provider>

          <hr />

          <div>
            <tlk-checkbox checkboxId="basic-checkbox">Check me!</tlk-checkbox>
          </div>

          <div>
            <tlk-checkbox checkboxId="default-checked" defaultChecked>Default checked!</tlk-checkbox>
          </div>

          <div>
            <tlk-checkbox checkboxId="controlled-checkbox" checked={this.controlledChecked} onCheckboxChanged={this.onChangeCheckbox}>Controlled checkbox!</tlk-checkbox>
          </div>

          <hr />

          <div>
            <label>Circular progress 0%</label>
            <tlk-circular-progress />
          </div>

          <div>
            <label>Circular progress 45%</label>
            <tlk-circular-progress value={45} />
          </div>

          <div>
            <label>Circular progress 66%</label>
            <tlk-circular-progress value={66} />
          </div>

          <div>
            <label>Circular progress 100%</label>
            <tlk-circular-progress value={100} />
          </div>

          <div>
            <label>Different min & max (min=15, max=85, value=26)</label>
            <tlk-circular-progress min={15} max={85} value={26} />
          </div>

          <div>
            <label>Indeterminate</label>
            <tlk-circular-progress indeterminate />
          </div>

          <div>
            <label>0% progress</label>
            <tlk-progress />
          </div>

          <div>
            <label>25% with label</label>
            <tlk-progress value={25}>
              25%
            </tlk-progress>
          </div>

          <div>
            <label>40% progress</label>
            <tlk-progress value={40} />
          </div>

          <div>
            <label>100% progress</label>
            <tlk-progress value={100} />
          </div>

          <div>
            <label>Different min & max (min=15, max=85, value=26)</label>
            <tlk-progress min={15} max={85} value={26} />
          </div>

          <div>
            <label>Indeterminate</label>
            <tlk-progress indeterminate />
          </div>

          <hr />

          <div>
            <label>Styled progress using tlk-theme-manager (UT Theme)</label>
            <tlk-theme-manager styles={styles}>
              <tlk-progress value={0} size="md" />
              <tlk-progress value={0} size="lg" />
              <tlk-progress value={25} size="md" />
              <tlk-progress value={25} size="lg" />
              <tlk-progress value={100} size="md" />
              <tlk-progress value={100} size="lg" />

              <tlk-circular-progress value={0} size="md" />
              <tlk-circular-progress value={0} size="lg" />
              <tlk-circular-progress value={25} size="md" />
              <tlk-circular-progress value={25} size="lg" />
              <tlk-circular-progress value={100} size="md" />
              <tlk-circular-progress value={100} size="lg" />
            </tlk-theme-manager>
          </div>

          {/* <tlk-theme-manager styles={styles}>
            <label>Button with fontSize 16px</label>
            <tlk-button onClick={this.onClickHandler} onMounted={(ev) => console.log(ev.detail)}>Test</tlk-button>

            <div>
              <tlk-theme-manager styles={subStyles} avoidInheritStyles>
                <label>Button with fontSize 26px and bg-color blue, and avoiding parent styles</label>
                <tlk-button>Test 2</tlk-button>

                <div>
                  <tlk-theme-manager styles={subSubStyles}>
                    <label>Button with bg-color green, and fontSize 26px inherit from parent</label>
                    <tlk-button>Test 3</tlk-button>
                  </tlk-theme-manager>
                </div>
              </tlk-theme-manager>
            </div>
          </tlk-theme-manager>

          <hr />

          <tlk-theme-manager styles={styles}>
            <tlk-portal id="portal-styled">
              Portal Styled
            </tlk-portal>
          </tlk-theme-manager>

          <hr />

          <tlk-portal id="portal-1">
            <div>Portal 1</div>
            <tlk-portal id="portal-11">
              <div>Portal 11</div>
              <tlk-portal id="portal-111" container={document.body}>
                <div>Portal 111 but with custom container</div>
              </tlk-portal>
            </tlk-portal>
          </tlk-portal> */}
        </main>
      </div>
    );
  }
}
