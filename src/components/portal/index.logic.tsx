import { Component, Host, Prop, h, Watch, Method, Element } from '@stencil/core';

@Component({
  tag: 'tlk-portal',
  styleUrl: 'index.styles.css',
  shadow: true,
})
export class TlkPortal {
  @Prop() container: HTMLElement;
  
  @Prop() onMounted: (portalElement: HTMLElement) => void;
  @Prop() onAnimationStart: (event: AnimationEvent) => void;
  @Prop() onAnimationEnd: (event: AnimationEvent) => void;
  @Prop() onTransitionEnd: (event: TransitionEvent) => void;

  @Element() self: HTMLElement;

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
