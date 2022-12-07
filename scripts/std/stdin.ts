export class STDIN {
	static async read(): Promise<string> {
		const decoder = new TextDecoder();
		const lines: string[] = [];

		for await (const chunk of Deno.stdin.readable) {
			const text = decoder.decode(chunk);

			lines.push(text);
		}

		return lines.join('\n');
	}
}
