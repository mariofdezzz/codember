import { LCOV } from './coverage/lcovParse.ts';
import { STDIN } from './std/stdin.ts';

const { LF, LH } = LCOV.parse(await STDIN.read());

const coverage = LH / LF * 100;

// TODO: Save on readme
console.log(coverage + '%');
