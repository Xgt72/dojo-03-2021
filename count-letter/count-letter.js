/*
Create a function `countChar` which counts, in a given string, the number of times a character appears.
If the string or the character is null, return -1.
If the character length is other than 1, return -1.
Example:
* "" and "a" -> 0
* "a" and "a" -> 1
* "aaaaabbbaa" and "a" -> 7
* "bbacbaaa" and "c" -> 1
* "bbcc" and "a" -> 0
* null and "a" -> -1
Add you own tests.
*/

// TODO your code:
function countChar(sentence, letter) {
  let total = 0;
  if (sentence === null || letter === null || letter.length < 1) {
    total = -1;
  } else {
    const tableau = sentence.split("");
    for (let i = 0; i < tableau.length; i++) {
      if (tableau[i] === letter) {
        total = total + 1;
        // total += 1
        // total++
      }
    }
  }
  return total;
}

module.exports = countChar;
