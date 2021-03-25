// TODO your code:
function anagram(str1, str2) {
  str1 = clean(str1);
  str2 = clean(str2);
  if (str1.length === str2.length && str1.join("") === str2.join("")) {
    return true;
  } else {
    return false;
  }
}

function clean(stringToClean) {
  stringToClean = stringToClean.toLowerCase();
  let arrayStr = stringToClean.split("");
  arrayStr = arrayStr.filter(character => character !== " ");
  arrayStr.sort();
  return arrayStr;
}

module.exports = anagram;

