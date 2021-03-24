const count = require("./count-letter.js");

describe("countChar", () => {
  it("Should be loaded", () => {
    expect(true).toBe(true);
  });

  it("Should return 0", () => {
    expect(countChar("", "a")).toBe(0);
  });

  it("Should return 1", () => {
    expect(countChar("a", "a")).toBe(1);
  });

  it("Should return 7", () => {
    expect(countChar("aaaaabbbaa", "a")).toBe(7);
  });

  it("Should return 1", () => {
    expect(countChar("bbacbaaa", "c")).toBe(1);
  });

  it("Should return 0", () => {
    expect(countChar("bbcc", "a")).toBe(0);
  });

  it("Should return -1", () => {
    expect(countChar(null, "a")).toBe(-1);
  });
});