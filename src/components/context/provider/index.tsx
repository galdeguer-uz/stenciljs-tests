import { Component, Prop, h, State, Watch, Event, EventEmitter, Listen } from "@stencil/core";

interface ConsumerEvent extends Event {
  detail: Function;
}

@Component({
  tag: 'tlk-provider',
})
export class TlkProvider {
  @Prop() value: any;

  @State() consumers: Function[] = [];

  @Event({ eventName: 'consumerMounted' }) consumerMountedEmitter: EventEmitter;

  @Watch('value')
  watchValue(newValue) {
    this.consumers.forEach(eachConsumer => eachConsumer(newValue))
  }

  @Listen('consumerMounted')
  mountConsumer(event: ConsumerEvent) {
    event.stopPropagation();

    event.detail(this.value);

    this.consumers = this.consumers.concat([event.detail]);
  }

  render() {
    <slot />
  }
}
