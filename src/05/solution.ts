import { solve } from './index.ts';

const input = await fetch('https://codember.dev/mecenas.json')
	.then((res) => res.json());

console.log(solve(input));
