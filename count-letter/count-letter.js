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
function countChar(phrase, lettre) {
  if (phrase === null || lettre === null || lettre.length < 1) {
    return -1;
  } else {
    let phraseExplose = phrase.split("");
    let count = 0;
    for (let i = 0; i < phraseExplose.length; i++) {
      if (lettre === phraseExplose[i]) {
        count = count + 1;
        //count += 1; count++
      }
    }
    return count;
  }
}
module.exports = countChar;

