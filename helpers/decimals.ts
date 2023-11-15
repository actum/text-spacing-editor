/**
 * Rounds a number to a specified number of decimal places.
 *
 * @param number - The number to be rounded.
 * @param decimalPlaces - The number of decimal places to round to.
 * @returns The rounded number.
 */
export const roundToDecimalPlaces = (number: number, decimalPlaces: number) => {
  const multiplier = 10 ** decimalPlaces;
  return Math.round(number * multiplier) / multiplier;
}

/**
 * Counts the number of decimal places in a given number.
 *
 * @param value - The number for which to count the decimal places.
 * @returns The number of decimal places. Returns 0 if the number is an integer.
 */
export const countDecimals = (value: number) => {
  if ((value % 1) != 0)
      return value.toString().split(".")[1].length;
  return 0;
};
