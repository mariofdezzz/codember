import { PairQueue } from './types/pairQueue.ts'
import { LongestZebraResult } from './types/longestZebraResult.ts'

export function solve(input: string[]): string {
  const { count, latestColor } = longestZebra(input)

  return count +'@'+ latestColor
}

function longestZebra(path: string[]): LongestZebraResult {
  const queue = new PairQueue<string>()

  // Longest zebra
  let count = 0
  let longestCount = 0
  let latestColor = ''

  path.forEach((color) => {
    const expectedColor = queue.first()
    queue.push(color)

    if (expectedColor === color && queue.length() === 2) {
      count++
    } else {
      count = queue.length()
    }

    if (longestCount <= count) {
      longestCount = count
      latestColor = color
    }
  })

  return {count: longestCount, latestColor}
}

