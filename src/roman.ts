export function romanConverter(
  hinduArabicNumeral: number,
  romanNumeral = ""
): string {
  const numeralMap: Record<number, string> = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  const romanValues = Object.keys(numeralMap).map((key) => parseInt(key));

  const largestRomanValueNotExceedingArabic = Math.max(
    ...romanValues.filter((number) => number <= hinduArabicNumeral)
  );

  const integerQuotient = Math.floor(
    hinduArabicNumeral / largestRomanValueNotExceedingArabic
  );

  const remainder =
    hinduArabicNumeral - integerQuotient * largestRomanValueNotExceedingArabic;

  romanNumeral +=
    numeralMap[largestRomanValueNotExceedingArabic].repeat(integerQuotient);

  if (remainder === 0) {
    return romanNumeral;
  } else {
    return romanConverter(remainder, romanNumeral);
  }
}
