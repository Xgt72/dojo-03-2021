const anagram = require("./anagram.js");

describe("anagram", () => {
  it("Should be loaded", () => {
    expect(true).toBe(true);
  });

  it("Should return true", () => {
    expect(anagram('elbow', 'be low')).toBe(true);
  });

  it("Should return false", () => {
    expect(countChar('inch', 'chins')).toBe(false);
  });

  it("Should return true", () => {
    expect(anagram('Andess', 'San des')).toBe(true);
  });

  it("Should return false", () => {
    expect(countChar('Hello', '')).toBe(false);
  });

  it("Should return true", () => {
    expect(anagram('Pablo Picasso', 'Pascal Obispo')).toBe(true);
  });

  it("Should return true", () => {
    expect(anagram('nectar', 'carnet')).toBe(true);
  });

  it("Should return true", () => {
    expect(anagram('argent', 'Grenat')).toBe(true);
  });

  it("Should return true", () => {
    expect(anagram('State', 'Taste')).toBe(true);
  });
});