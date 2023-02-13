import { r as registerInstance, f as createEvent, h } from './index-6f8a5f60.js';

let TlkProvider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.consumerMountedEmitter = createEvent(this, "consumerMounted", 7);
    this.consumers = [];
  }
  watchValue(newValue) {
    this.consumers.forEach(eachConsumer => eachConsumer(newValue));
  }
  mountConsumer(event) {
    event.stopPropagation();
    event.detail(this.value);
    this.consumers = this.consumers.concat([event.detail]);
  }
  render() {
    h("slot", null);
  }
  static get watchers() { return {
    "value": ["watchValue"]
  }; }
};

export { TlkProvider as tlk_provider };
