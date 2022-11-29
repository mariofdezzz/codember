export function solve(from: number, to: number): string {
  const passwords = findValidPasswords(from, to);

  return passwords.length +'-'+ passwords.at(55)
}

export function findValidPasswords(from: number, to: number): number[] {
  const validPasswords: number[] = []

  for (let i = from; i <= to; i++) {
    if (isValidPassword(i))
      validPasswords.push(i)
  }

  return validPasswords
}

export function isValidPassword(password: number): boolean {
  const digits = getDigits(password)

  return digits.length === 5 &&
    hasIncreasingDigits(digits) &&
    hasRepeatedNumber(digits, 5, 2)
}

export function getDigits(password: number): number[] {
  return password.toString().split('').map(Number)
}

export function hasIncreasingDigits(digits: number[]): boolean {
  return digits.every((digit, index) => 
    index === 0 || digit >= digits[index - 1]
  )
}

export function hasRepeatedNumber(digits: number[], number: number, times: number): boolean {
  if (times === 0) return true

  const nextNumberIndex = digits.findIndex((digit) => digit === number)

  return nextNumberIndex > -1 &&
    hasRepeatedNumber(digits.slice(nextNumberIndex + 1), number, times - 1)
}
