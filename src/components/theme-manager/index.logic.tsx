import { Component, Host, Prop, h, Element } from '@stencil/core';

const extendStyles = (styles: object, nodes: NodeList) => {
  nodes.forEach((eachChild) => {
    if (eachChild['COMPONENT_ID']) {
      const stylesByComponent: string = styles[eachChild['COMPONENT_ID']];
      eachChild['theme'] = stylesByComponent;     
    }

    extendStyles(styles, eachChild.childNodes);
  });
};

@Component({
  tag: 'tlk-theme-manager',
  shadow: true,
})
export class TlkThemeManager {
  @Prop() styles: object = {};
  @Prop() onMounted: (themeManagerElement: HTMLElement) => void = () => {};

  @Element() self: HTMLElement;

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
