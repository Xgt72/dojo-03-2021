const anagram = require("./anagram.js");

describe("anagram", () => {
  it("Should be loaded", () => {
    expect(true).toBe(true);
  });

  it("Should return true", () => {
    expect(anagram('albow', 'be low')).toBe(true);
  });

  it("Should return false", () => {
    expect(anagram('inch', 'chins')).toBe(false);
  });

  it("Should return true", () => {
    expect(anagram('Anedss', 'San des')).toBe(true);
  });

  it("Should return false", () => {
    expect(anagram('Hello', '')).toBe(false);
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

  it("Should return false", () => {
    expect(anagram('argent', 'arenat')).toBe(false);
  });
});