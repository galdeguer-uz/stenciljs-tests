import { r as registerInstance, f as createEvent } from './index-6f8a5f60.js';

let TlkConsumer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.consumerMountedEmitter = createEvent(this, "consumerMounted", 7);
    this.setValue = (newValue) => {
      this.value = newValue;
    };
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
};

export { TlkConsumer as tlk_consumer };
