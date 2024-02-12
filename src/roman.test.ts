import { romanConverter } from "./roman";

describe("romanConverter", () => {
  const numeralMap = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
  };

  it("should return the corresponding roman number when passed the exact value of any one specific symbol", () => {
    expect(romanConverter(1)).toBe(numeralMap[1]);
    expect(romanConverter(5)).toBe(numeralMap[5]);
    expect(romanConverter(10)).toBe(numeralMap[10]);
    expect(romanConverter(50)).toBe(numeralMap[50]);
    expect(romanConverter(100)).toBe(numeralMap[100]);
    expect(romanConverter(500)).toBe(numeralMap[500]);
    expect(romanConverter(1000)).toBe(numeralMap[1000]);
  });

  it("should return of string of repeated numerals when passed a number exactly divisible by one of the roman numeral values", () => {
    expect(romanConverter(3)).toBe(numeralMap[1].repeat(3));
    expect(romanConverter(5)).toBe(numeralMap[5].repeat(1));
    expect(romanConverter(20)).toBe(numeralMap[10].repeat(2));
    expect(romanConverter(300)).toBe(numeralMap[100].repeat(3));
    expect(romanConverter(3000)).toBe(numeralMap[1000].repeat(3));
  });

  it("should handle additive Roman numerals", () => {
    expect(romanConverter(2)).toBe("II");
    expect(romanConverter(8)).toBe("VIII");
    expect(romanConverter(11)).toBe("XI");
    expect(romanConverter(153)).toBe("CLIII");
    expect(romanConverter(2388)).toBe("MMCCCLXXXVIII");
  });

  it("should handle subtractive Roman numerals", () => {
    expect(romanConverter(4)).toBe("IV");
    expect(romanConverter(9)).toBe("IX");
    expect(romanConverter(14)).toBe("XIV");
    expect(romanConverter(39)).toBe("XXXIX");
    expect(romanConverter(40)).toBe("XL");
    expect(romanConverter(44)).toBe("XLIV");
    expect(romanConverter(45)).toBe("XLV");
    expect(romanConverter(47)).toBe("XLVII");
    expect(romanConverter(49)).toBe("XLIX");
    expect(romanConverter(154)).toBe("CLIV");
    expect(romanConverter(400)).toBe("CD");
    expect(romanConverter(2389)).toBe("MMCCCLXXXIX");
    expect(romanConverter(90)).toBe("XC");
    expect(romanConverter(429)).toBe("CDXXIX");
    expect(romanConverter(900)).toBe("CM");
    expect(romanConverter(994)).toBe("CMXCIV");
  });
});
