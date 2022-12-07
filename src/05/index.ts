import { FindLastAliveResult } from './types/findLastAliveResult.ts';

export function solve(input: string[]): string {
	const { value, index } = findLastAlive(input);

	return value + '-' + index;
}

export function findLastAlive(input: string[]): FindLastAliveResult {
	return findLastAliveRecursive(input, -1, input.length);
}

export function findLastAliveRecursive(
	input: (string | null)[],
	lastIndex: number,
	itemsLeft: number,
): FindLastAliveResult {
	if (itemsLeft === 1) {
		return {
			value: input[lastIndex] as string,
			index: lastIndex,
		};
	}

	const nextIndex = findNext(input, lastIndex);
	const nextDeadIndex = findNext(input, nextIndex);

	input[nextDeadIndex] = null;

	return findLastAliveRecursive(input, nextIndex, itemsLeft - 1);
}

export function findNext(input: (string | null)[], index: number): number {
	const nextIndex = (index + 1) % input.length;

	return input[nextIndex] === null ? findNext(input, nextIndex) : nextIndex;
}
