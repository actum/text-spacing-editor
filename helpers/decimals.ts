export const roundToDecimalPlaces = (number, decimalPlaces) => {
  const multiplier = 10 ** decimalPlaces;
  return Math.round(number * multiplier) / multiplier;
}

export const countDecimals = function (value) {
  if ((value % 1) != 0)
      return value.toString().split(".")[1].length;
  return 0;
};
