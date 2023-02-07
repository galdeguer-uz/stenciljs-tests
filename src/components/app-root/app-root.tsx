import { Component, h } from '@stencil/core';

import { TlkButton } from '../button';

const styles = {
  [TlkButton['COMPONENT_ID']]: `
    button {
      font-size: 24px;
    }
  `,
};

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <main>
          <tlk-theme-manager styles={styles}>
            <tlk-button>Test</tlk-button>

            <div>
              Testing
              <tlk-button>Test 2</tlk-button>
            </div>
          </tlk-theme-manager>

          <tlk-portal id="portal-1" onMounted={(portalElement) => console.log('Mounted => ', portalElement)}>
            <div>Portal 1</div>
            <tlk-portal id="portal-11" onMounted={(portalElement) => console.log('Mounted => ', portalElement)}>
              <div>Portal 11</div>
              <tlk-portal id="portal-111" container={document.body} onMounted={(portalElement) => console.log('Mounted => ', portalElement)}>
                <div>Portal 111 but with custom container</div>
              </tlk-portal>
            </tlk-portal>
          </tlk-portal>
        </main>
      </div>
    );
  }
}
