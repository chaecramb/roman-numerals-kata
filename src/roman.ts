export const romanConverter = {
  NUMERAL_VALUES: [
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
  ],

  base10ToRoman: function (base10Value: number, romanNumeral = ""): string {
    if (base10Value < 1 || base10Value > 3000) {
      throw new Error("Number should be between 1 and 3000");
    }

    const currentNumeral = romanConverter.NUMERAL_VALUES.find(
      (nv) => nv.value <= base10Value
    );

    if (currentNumeral !== undefined) {
      romanNumeral += currentNumeral.numeral;
      base10Value -= currentNumeral.value;
    }

    if (base10Value === 0) {
      return romanNumeral;
    } else {
      return romanConverter.base10ToRoman(base10Value, romanNumeral);
    }
  },

  romanToBase10: function (romanNumeral: string, base10Value = 0): number {
    const currentNumeral = romanConverter.NUMERAL_VALUES.find(
      (nv) =>
        nv.numeral === romanNumeral.slice(0, 2) ||
        nv.numeral === romanNumeral[0]
    );

    if (currentNumeral === undefined) {
      throw new Error("Invalid Roman Numeral");
    }

    base10Value += currentNumeral.value;
    romanNumeral = romanNumeral.replace(currentNumeral.numeral, "");

    if (romanNumeral.length === 0) {
      return base10Value;
    } else {
      return romanConverter.romanToBase10(romanNumeral, base10Value);
    }
  },
};
