import { romanConverter } from "./roman";

describe("romanConverter", () => {
  it("should return the corresponding roman number when passed the exact value of any one specific symbol", () => {
    const numeralMap = {
      1: "I",
      5: "V",
      10: "X",
      50: "L",
      100: "C",
      500: "D",
      1000: "M",
    };

    expect(romanConverter(1)).toBe(numeralMap[1]);
    expect(romanConverter(5)).toBe(numeralMap[5]);
    expect(romanConverter(10)).toBe(numeralMap[10]);
    expect(romanConverter(50)).toBe(numeralMap[50]);
    expect(romanConverter(100)).toBe(numeralMap[100]);
    expect(romanConverter(500)).toBe(numeralMap[500]);
    expect(romanConverter(1000)).toBe(numeralMap[1000]);
  });
});
