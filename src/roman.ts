export function romanConverter(hinduArabicNumeral: number) {
  const numeralMap: Record<number, string> = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
  };

  const romanNumeralValues = Object.keys(numeralMap).map((key) =>
    parseInt(key)
  );

  const largestNumeralValueNotExceeding = Math.max(
    ...romanNumeralValues.filter((number) => number <= hinduArabicNumeral)
  );

  const integerQuotient = Math.floor(
    hinduArabicNumeral / largestNumeralValueNotExceeding
  );

  return numeralMap[largestNumeralValueNotExceeding].repeat(integerQuotient);
}
