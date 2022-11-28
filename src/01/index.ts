import { User } from './types.ts';

export function solve(input: string) {
  const lines = input.split(/\n\n/)

  const entries = lines.map(getUser)

  const valids = entries.filter(isValidUser)

  return valids.length + (valids.at(-1)?.usr ?? '@')
}

export function getUser(input: string): Partial<User> {
  return input
    .replaceAll('\n', ' ')
    .split(' ')
    .reduce((acc: Record<string, string>, cur) => {
      const [key, value] = cur.split(':') as [string, string]

      acc[key] = value
      return acc
    }, {})
}

export function isValidUser(user: Partial<User>): user is User {
  const keys = Object.keys(user)

  return (
    keys.includes('usr') &&
    keys.includes('eme') &&
    keys.includes('psw') &&
    keys.includes('age') &&
    keys.includes('loc') &&
    keys.includes('fll')
  )
}

