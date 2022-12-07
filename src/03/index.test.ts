import { assertEquals } from 'asserts';
import { solve } from './index.ts';

Deno.test('Challenge 03', async ({ step }) => {
	await step('Example 01', () => {
		const input = ['red', 'blue', 'red', 'blue', 'green'];

		assertEquals(solve(input), '4@blue');
	});

	await step('Example 02', () => {
		const input = ['green', 'red', 'blue', 'gray'];

		assertEquals(solve(input), '2@gray');
	});

	await step('Example 03', () => {
		const input = ['blue', 'blue', 'blue', 'blue'];

		assertEquals(solve(input), '1@blue');
	});

	await step('Example 04', () => {
		const input = ['red', 'green', 'red', 'green', 'red', 'green'];

		assertEquals(solve(input), '6@green');
	});

	await step('Example 05', () => {
		const input = ['blue', 'red', 'blue', 'red', 'gray'];

		assertEquals(solve(input), '4@red');
	});

	await step('Example 06', () => {
		const input = ['red', 'red', 'blue', 'red', 'red', 'red', 'green'];

		assertEquals(solve(input), '3@red');
	});

	await step('Example 07', () => {
		const input = [
			'red',
			'blue',
			'red',
			'green',
			'red',
			'green',
			'red',
			'green',
		];

		assertEquals(solve(input), '6@green');
	});
});
