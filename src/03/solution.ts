import { solve } from './index.ts'

const input = await fetch('https://codember.dev/colors.txt')
  .then(res => res.json())

console.log(solve(input));
