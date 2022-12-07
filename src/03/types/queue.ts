export abstract class Queue<T> {
	abstract push(item: T): void;
	abstract pop(): T | undefined;
	abstract first(): T | undefined;
	// abstract last(): T | undefined;
}
