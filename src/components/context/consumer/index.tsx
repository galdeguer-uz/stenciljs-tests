import { Component, State, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: 'tlk-consumer',
})
export class TlkConsumer {
  @Prop() renderer: Function;

  @State() value: any;

  @Event({ eventName: 'consumerMounted' }) consumerMountedEmitter: EventEmitter;

  setValue = (newValue: any) => {
    this.value = newValue;
  }
  
  componentWillLoad() {
    this.consumerMountedEmitter.emit(this.setValue);
  }

  render() {
    if (this.value) {
      return this.renderer(this.value);
    }

    return null;
  }
}
