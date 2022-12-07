import { ShieldColor } from './types.ts';

export function getShieldColor(coverage: number): ShieldColor {
	if (coverage < 50) {
		return ShieldColor.red;
	}
	if (coverage < 75) {
		return ShieldColor.orange;
	}
	if (coverage < 90) {
		return ShieldColor.yellow;
	}
	if (coverage < 100) {
		return ShieldColor.green;
	}
	return ShieldColor.brightgreen;
}
