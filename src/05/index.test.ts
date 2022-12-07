import { assertEquals } from 'asserts';
import { findLastAlive, solve } from './index.ts';

Deno.test('Challenge 05', async ({ step }) => {
	await step('Example 01', () => {
		const input = new Array(10).fill(0).map((_, idx) => String(idx));
		const { index } = findLastAlive(input);

		assertEquals(index, 4);
	});

	await step('Solve', () => {
		const input = new Array(10).fill(0).map((_, idx) => String(idx));

		assertEquals(solve(input), '4-4');
	});
});
