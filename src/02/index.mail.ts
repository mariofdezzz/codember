export function solve(code: string): string {
	const codeWords = code.split(' ');

	const words = codeWords.map((word) =>
		getCharCodes(word)
			.map((code) => String.fromCharCode(code))
			.join('')
	);

	return words.join(' ');
}

export function getCharCodes(code: string): number[] {
	const codes: number[] = [];
	let currentCode = '';

	for (let i = 0; i < code.length; i++) {
		currentCode += code[i];
		const current = Number(currentCode);

		if (current > 255) {
			throw new Error(`Invalid code: ${current} -> ${currentCode}`);
		}

		if (current >= 32) {
			codes.push(current);
			currentCode = '';
		}
	}
	return codes;
}
