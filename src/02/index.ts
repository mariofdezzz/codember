
export function solve(code: string): string {
  const codeWords = code.split(' ')
  
  const words = codeWords.map(word => 
    getCharCodes(word)
      .map(code => String.fromCharCode(code))
      .join('')
  )
  
  return words.join(' ')
}

export function getCharCodes(code: string): number[] {
  const codes: string[] = []

  for (let i = 0; i < code.length; i++) {
    if (code[i] === '9') {
      codes.push(code[i] + code[i + 1])
      i++
    } else {
      codes.push(code[i] + code[i + 1] + code[i + 2])
      i += 2
    }
  }
  return codes.map(code => Number(code))
}

// const code = '11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101'

// const codeWords = code.split(' ')

// const words = codeWords.map(word => 
//   getCharCodes(word)
//     .map(code => String.fromCharCode(code))
//     .join('')
// )

// const sentence = words.join(' ')


// console.log('Result -> ' + sentence);
