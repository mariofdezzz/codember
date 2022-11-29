import { Queue } from './queue.ts'

export class LifoQueue<T> implements Queue<T> {
  private items: T[] = [];

  push(item: T) {
    this.items.push(item);
  }

  pop() {
    return this.items.shift();
  }

  first(): T | undefined {
    return this.items[0];
  }

  last() {
    return this.items.at(-1);
  }

  length() {
    return this.items.length;
  }
}
