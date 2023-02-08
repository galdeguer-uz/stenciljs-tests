import { Component, Host, Prop, h, Element } from '@stencil/core';

import COMPONENT_ID from './constants';

import extendStyles from './helpers/extend-styles';

@Component({
  tag: 'tlk-theme-manager',
  shadow: true,
})
export class TlkThemeManager {
  constructor() {
    Object.defineProperty(this.self, 'COMPONENT_ID', {
      value: COMPONENT_ID,
      configurable: false,
      writable: false,
    });
  }

  @Prop() avoidInheritStyles: boolean = false;
  @Prop() styles: object = {};
  @Prop() onMounted: (themeManagerElement: HTMLElement) => void = () => {};

  @Element() self: HTMLElement;

  static COMPONENT_ID: string = COMPONENT_ID;

  componentWillLoad() {
    extendStyles(this.styles, this.self.childNodes);
  }

  componentDidLoad() {
    /* Call the onMounted callback */
    this.onMounted(this.self);
  }

  render() {
    return (
      <Host class="tlk-theme-manager">
        <slot />
      </Host>
    );
  }
}
