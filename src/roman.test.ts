import { romanConverter } from "./roman";

describe("romanConverter", () => {
  it("should throw an error when passed a number less than 1 or greater than 3000", () => {
    expect(() => {
      romanConverter(-1);
    }).toThrow("Number should be between 1 and 3000");
    expect(() => {
      romanConverter(0);
    }).toThrow("Number should be between 1 and 3000");
    expect(() => {
      romanConverter(3001);
    }).toThrow("Number should be between 1 and 3000");
  });

  it("should return the corresponding roman number when passed the exact value of any one specific symbol", () => {
    expect(romanConverter(1)).toBe("I");
    expect(romanConverter(5)).toBe("V");
    expect(romanConverter(10)).toBe("X");
    expect(romanConverter(50)).toBe("L");
    expect(romanConverter(100)).toBe("C");
    expect(romanConverter(500)).toBe("D");
    expect(romanConverter(1000)).toBe("M");
  });

  it("should return of string of repeated numerals when passed a number exactly divisible by one of the roman numeral values", () => {
    expect(romanConverter(3)).toBe("III");
    expect(romanConverter(20)).toBe("XX");
    expect(romanConverter(300)).toBe("CCC");
    expect(romanConverter(3000)).toBe("MMM");
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
