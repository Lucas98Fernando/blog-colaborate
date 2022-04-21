class EventBusEvent extends Event {
  public data: unknown;

  constructor({ type, data }: { type: string; data: unknown }) {
    super(type);
    this.data = data;
  }
}

class EventBus extends EventTarget {
  private static _instance: EventBus;

  public static getInstance(): EventBus {
    if (!this._instance) this._instance = new EventBus();
    return this._instance;
  }

  public emit(type: string, data?: unknown): void {
    this.dispatchEvent(new EventBusEvent({ type, data }));
  }
}

export default EventBus.getInstance();
