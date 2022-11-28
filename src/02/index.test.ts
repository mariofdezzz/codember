import { assertEquals } from 'asserts';
import { solve } from './index.ts';

Deno.test('Challenge 02', async ({ step }) => {
  await step('Example 01 - "midu"', () => {
    assertEquals(solve('109105100117'), 'midu')
  })

  await step('Example 02 - "codember"', () => {
    assertEquals(solve('9911110010110998101114'), 'codember')
  })

  await step('Example 03 - "codember midu"', () => {
    assertEquals(solve('9911110010110998101114 109105100117'), 'codember midu')
  })

  await step('Example 04 - "play tetris"', () => {
    assertEquals(solve('11210897121 116101116114105115'), 'play tetris')
  })

  await step('Example 05 - Sentence', () => {
    const code = '11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101'

    assertEquals(solve(code), 'thanks for playing codember please share')
  })
});
