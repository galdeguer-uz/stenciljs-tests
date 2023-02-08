import { Component, Host, Prop, h, Element, Event, EventEmitter } from '@stencil/core';

const COMPONENT_ID: string = 'Toolkit.Button';

@Component({
  tag: 'tlk-button',
  styleUrl: 'index.styles.css',
  shadow: true,
})
export class TlkButton {
  constructor() {
    Object.defineProperty(this.self, 'COMPONENT_ID', {
      value: COMPONENT_ID,
      configurable: false,
      writable: false,
    });
  }

  @Prop() theme: any;

  @Event() mounted: EventEmitter;

  @Element() self: HTMLElement;

  static COMPONENT_ID: string = COMPONENT_ID;

  mountedHandler() {
    this.mounted.emit(this.self);
  }

  componentDidLoad() {
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

    /* Call the onMounted callback */
    this.mountedHandler();
  }

  render() {
    return (
      <Host class="tlk-button">
        <button>
          <slot />
        </button>
      </Host>
    );
  }
};
