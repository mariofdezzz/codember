import { assertEquals } from 'asserts'
import { getUser, isValidUser, solve } from './index.ts';

Deno.test('Challenge 01', async ({ step }) => {
  const user01 = 'usr:@midudev eme:mi@gmail.com psw:123456 age:22 loc:bcn fll:82'
  const user02 = 'fll:111 eme:yrfa@gmail.com \nusr:@codember psw:123456 age:21 loc:World'
  const user03 = 'psw:11133 loc:Canary fll:333 \nusr:@pheralb eme:pheralb@gmail.com'
  const user04 = 'usr:@itziar age:19 loc:isle psw:aaa fll:222 eme:itzi@gmail.com'

  await step('Example 01', () => {
    assertEquals(isValidUser(getUser(user01)), true)
  })

  await step('Example 02', () => {
    assertEquals(isValidUser(getUser(user02)), true)
  })

  await step('Example 03', () => {
    // Missing age property
    assertEquals(isValidUser(getUser(user03)), false)
  })

  await step('Example 04', () => {
    assertEquals(isValidUser(getUser(user04)), true)
  })

  await step('Solve users joined', () => {
    const input = [user01, user02, user03, user04].join('\n\n')

    assertEquals(solve(input), '3@itziar')
  })
});
