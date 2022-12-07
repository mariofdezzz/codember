import { LcovReport } from './types.ts';

export class LCOV {
	static parse(text: string): LcovReport {
		const LHs = this.getAllStats(text, 'LH');
		const LFs = this.getAllStats(text, 'LF');

		return { LF: this.accumulatedSum(LFs), LH: this.accumulatedSum(LHs) };
	}

	private static getAllStats(text: string, stat: string): number[] {
		const pattern = new RegExp(`(?<=${stat}:)(\\d+)`, 'g');

		return text.match(pattern)?.map((stat) => Number(stat)) ?? [];
	}

	private static accumulatedSum(values: number[]): number {
		return values.reduce((sum, value) => sum + value, 0);
	}
}
