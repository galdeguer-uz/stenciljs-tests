import { Component, Host, Prop, h, Watch, Method, Element } from '@stencil/core';

import COMPONENT_ID from './constants';

@Component({
  tag: 'tlk-portal',
  styleUrl: 'index.styles.css',
  shadow: true,
})
export class TlkPortal {
  constructor() {
    Object.defineProperty(this.self, 'COMPONENT_ID', {
      value: COMPONENT_ID,
      configurable: false,
      writable: false,
    });
  }

  @Prop() theme: any;

  @Prop() container: HTMLElement;
  
  @Prop() onMounted: (portalElement: HTMLElement) => void = () => {};
  @Prop() onAnimationStart: (event: AnimationEvent) => void;
  @Prop() onAnimationEnd: (event: AnimationEvent) => void;
  @Prop() onTransitionEnd: (event: TransitionEvent) => void;

  @Element() self: HTMLElement;

  static COMPONENT_ID: string = COMPONENT_ID;

  private attachPortalTo(container?: HTMLElement) {
    let containerToUse: HTMLElement;

    if (container) {
      containerToUse = container;
    } else {
      containerToUse = document.body;
    }

    containerToUse.appendChild(this.self);
  }

  @Method()
  async appendTo(newContainer: HTMLElement) {
    this.attachPortalTo(newContainer);
  }

  @Watch('container')
  watchContainerHandler() {
    this.attachPortalTo(this.container);
  }

  componentWillLoad() {
    /* Check if it's inside another tlk-portal */
    let containerToAttach: HTMLElement = this.self.parentElement.closest('tlk-portal')

    /* If we have the container prop defined, use it */
    if (this.container) {
      containerToAttach = this.container;
    }

    /* Move the portal element into the container */
    this.attachPortalTo(containerToAttach);
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
    this.onMounted(this.self);
  }

  render() {
    return (
      <Host class="tlk-portal">
        <div class="tlk-portal__content"
          onAnimationStart={this.onAnimationStart}
          onAnimationEnd={this.onAnimationEnd}
          onTransitionEnd={this.onTransitionEnd}
        >
          <slot />
        </div>
      </Host>
    );
  }
}
