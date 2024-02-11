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
  });
});
