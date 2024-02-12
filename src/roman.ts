export function romanConverter(base10Value: number, romanNumeral = ""): string {
  if (base10Value < 1 || base10Value > 3000) {
    throw new Error("Number should be between 1 and 3000");
  }

  const NUMERAL_VALUES = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  const currentNumeral = NUMERAL_VALUES.find((ne) => ne.value <= base10Value);

  if (currentNumeral !== undefined) {
    romanNumeral += currentNumeral.numeral;
    base10Value -= currentNumeral.value;
  }

  if (base10Value === 0) {
    return romanNumeral;
  } else {
    return romanConverter(base10Value, romanNumeral);
  }
}
