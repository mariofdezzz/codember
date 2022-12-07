import { LCOV } from './coverage/lcovParse.ts';
import { STDIN } from './std/stdin.ts';
import { render } from 'mustache';
import { dirname, fromFileUrl, join as pathJoin } from 'path';
import * as Colors from 'colors';
import { getShieldColor } from './coverage/color.ts';

// Code coverage
const { LF, LH } = LCOV.parse(await STDIN.read());

const coverage = Math.floor(LH / LF * 100);
const color = getShieldColor(coverage);

// Write README
const __dirname = dirname(fromFileUrl(import.meta.url));
const template = await Deno.readTextFile(
	pathJoin(__dirname, 'README.template'),
);

const readme = render(template, { coverage: coverage + '%', color });

await Deno.writeTextFile('README.md', readme);

console.log(`\n[${Colors.green('DONE')}] README.md updated`);
