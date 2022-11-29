import { solve } from './index.ts'

const input = await fetch('https://codember.dev/encrypted.txt')
  .then(res => res.text())

console.log(solve(input));
