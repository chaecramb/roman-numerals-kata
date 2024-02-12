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
  console.log(
    `largestRomanValueNotExceedingArabic: ${largestRomanValueNotExceedingArabic}`
  );

  const integerQuotient = Math.floor(
    hinduArabicNumeral / largestRomanValueNotExceedingArabic
  );
  console.log(`integerQuotient: ${integerQuotient}`);

  const remainder =
    hinduArabicNumeral - integerQuotient * largestRomanValueNotExceedingArabic;
  console.log(`remainder: ${remainder}`);

  romanNumeral +=
    numeralMap[largestRomanValueNotExceedingArabic].repeat(integerQuotient);
  console.log(`romanNumeral: ${romanNumeral}`);

  if (remainder === 0) {
    console.log(`Returning Roman Numeral: ${romanNumeral}`);
    return romanNumeral;
  } else {
    console.log(`Calling: romanConverter(${remainder}, ${romanNumeral})`);
    return romanConverter(remainder, romanNumeral);
  }
}
