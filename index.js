import lpad from 'mout/string/lpad';
import isHexColor from 'is-hexcolor';

/**
 * @param  {string} originalColor
 *
 * @returns {string}
 */
function normalizeColor(originalColor) {
	const color = originalColor.replace(/^#/, '');
	if (color.length === 3) {
		return color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
	}
	return color;
}

/**
 * @param  {number} decimalValue
 *
 * @returns {string}
 */
function decimalToHex(decimalValue) {
	return decimalValue.toString(16);
}

/**
 * @param  {string} hexValue
 *
 * @returns {number}
 */
function hexToDecimal(hexValue) {
	return parseInt(hexValue, 16);
}

/**
 * @param  {string} originalBaseColor
 * @param  {string} originalColorToAdjust
 * @param  {number} weight
 *
 * @returns {string}
 */
function mix(originalBaseColor, originalColorToAdjust, weight = 1) {
	const color = [];

	if (!isHexColor(originalBaseColor) || !isHexColor(originalColorToAdjust)) {
		throw new TypeError('Expected color to be a valid hex color.');
	}

	const baseColor = normalizeColor(originalBaseColor);
	const colorToAdjust = normalizeColor(originalColorToAdjust);

	const colorCharacters = colorToAdjust.length - 1;

	for (let i = 0; i <= colorCharacters; i += 2) {
		const baseColorDecimal = hexToDecimal(baseColor.slice(i, i + 2));
		const colorToAdjustDecimal = hexToDecimal(
			colorToAdjust.slice(i, i + 2)
		);

		const value = lpad(
			decimalToHex(
				Math.round(
					colorToAdjustDecimal +
						(baseColorDecimal - colorToAdjustDecimal) *
							((weight * 100) / 100)
				)
			),
			2,
			'0'
		);

		color.push(value);
	}
	const hexColor = color.join('');
	return `#${hexColor}`;
}

function tint(color, percent) {
	return mix('#fff', color, percent);
}

function shade(color, percent) {
	return mix('#000', color, percent);
}

export { tint, shade };
