import { solve } from './index.ts'

const input = await fetch('https://codember.dev/users.txt')
  .then(res => res.text())

console.log(solve(input));
