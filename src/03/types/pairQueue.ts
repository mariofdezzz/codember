import { LifoQueue } from './lifoQueue.ts';

export class PairQueue<T> extends LifoQueue<T> {
	push(item: T) {
		super.push(item);

		if (this.length() > 2) this.pop();
		if (this.length() == 2 && this.first() === item) this.pop();
	}
}
