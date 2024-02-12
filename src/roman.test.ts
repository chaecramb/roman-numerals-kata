import { romanConverter } from "./roman";

describe("romanConverter.base10ToRoman", () => {
  it("should throw an error when passed a number less than 1 or greater than 3000", () => {
    expect(() => {
      romanConverter.base10ToRoman(-1);
    }).toThrow("Number should be between 1 and 3000");
    expect(() => {
      romanConverter.base10ToRoman(0);
    }).toThrow("Number should be between 1 and 3000");
    expect(() => {
      romanConverter.base10ToRoman(3001);
    }).toThrow("Number should be between 1 and 3000");
  });

  it("should return the corresponding roman number when passed the exact value of any one specific symbol", () => {
    expect(romanConverter.base10ToRoman(1)).toBe("I");
    expect(romanConverter.base10ToRoman(5)).toBe("V");
    expect(romanConverter.base10ToRoman(10)).toBe("X");
    expect(romanConverter.base10ToRoman(50)).toBe("L");
    expect(romanConverter.base10ToRoman(100)).toBe("C");
    expect(romanConverter.base10ToRoman(500)).toBe("D");
    expect(romanConverter.base10ToRoman(1000)).toBe("M");
  });

  it("should return of string of repeated numerals when passed a number exactly divisible by one of the roman numeral values", () => {
    expect(romanConverter.base10ToRoman(3)).toBe("III");
    expect(romanConverter.base10ToRoman(20)).toBe("XX");
    expect(romanConverter.base10ToRoman(300)).toBe("CCC");
    expect(romanConverter.base10ToRoman(3000)).toBe("MMM");
  });

  it("should handle additive Roman numerals", () => {
    expect(romanConverter.base10ToRoman(2)).toBe("II");
    expect(romanConverter.base10ToRoman(8)).toBe("VIII");
    expect(romanConverter.base10ToRoman(11)).toBe("XI");
    expect(romanConverter.base10ToRoman(153)).toBe("CLIII");
    expect(romanConverter.base10ToRoman(2388)).toBe("MMCCCLXXXVIII");
  });

  it("should handle subtractive Roman numerals", () => {
    expect(romanConverter.base10ToRoman(4)).toBe("IV");
    expect(romanConverter.base10ToRoman(9)).toBe("IX");
    expect(romanConverter.base10ToRoman(14)).toBe("XIV");
    expect(romanConverter.base10ToRoman(39)).toBe("XXXIX");
    expect(romanConverter.base10ToRoman(40)).toBe("XL");
    expect(romanConverter.base10ToRoman(44)).toBe("XLIV");
    expect(romanConverter.base10ToRoman(45)).toBe("XLV");
    expect(romanConverter.base10ToRoman(47)).toBe("XLVII");
    expect(romanConverter.base10ToRoman(49)).toBe("XLIX");
    expect(romanConverter.base10ToRoman(154)).toBe("CLIV");
    expect(romanConverter.base10ToRoman(400)).toBe("CD");
    expect(romanConverter.base10ToRoman(2389)).toBe("MMCCCLXXXIX");
    expect(romanConverter.base10ToRoman(90)).toBe("XC");
    expect(romanConverter.base10ToRoman(429)).toBe("CDXXIX");
    expect(romanConverter.base10ToRoman(900)).toBe("CM");
    expect(romanConverter.base10ToRoman(994)).toBe("CMXCIV");
  });
});

describe("romanConverter.romanToBase10", () => {
  it("should throw an error if passed an invalid string", () => {
    expect(() => {
      romanConverter.romanToBase10("IVcatXX");
    }).toThrow("Invalid Roman Numeral");
    expect(() => {
      romanConverter.romanToBase10("pikachu");
    }).toThrow("Invalid Roman Numeral");
    expect(() => {
      romanConverter.romanToBase10("0X0X0");
    }).toThrow("Invalid Roman Numeral");
  });

  it("should convert additive roman numerals", () => {
    expect(romanConverter.romanToBase10("II")).toBe(2);
    expect(romanConverter.romanToBase10("VIII")).toBe(8);
    expect(romanConverter.romanToBase10("XI")).toBe(11);
    expect(romanConverter.romanToBase10("CLIII")).toBe(153);
    expect(romanConverter.romanToBase10("MMCCCLXXXVIII")).toBe(2388);
  });
  it("should convert subtractive roman numerals", () => {
    expect(romanConverter.romanToBase10("IV")).toBe(4);
    expect(romanConverter.romanToBase10("IX")).toBe(9);
    expect(romanConverter.romanToBase10("XIV")).toBe(14);
    expect(romanConverter.romanToBase10("XXXIX")).toBe(39);
    expect(romanConverter.romanToBase10("XL")).toBe(40);
    expect(romanConverter.romanToBase10("XLIV")).toBe(44);
    expect(romanConverter.romanToBase10("XLIX")).toBe(49);
    expect(romanConverter.romanToBase10("XC")).toBe(90);
    expect(romanConverter.romanToBase10("CLIV")).toBe(154);
    expect(romanConverter.romanToBase10("CDXXIX")).toBe(429);
    expect(romanConverter.romanToBase10("CM")).toBe(900);
    expect(romanConverter.romanToBase10("CMXCIV")).toBe(994);
  });
});
