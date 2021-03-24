// TODO your code:
function anagram(str1, str2) {
  //Transformer les deux chaines de caractères en deux tableaux.
  const table1 = str1.toLowerCase().split("");
  const table2 = str2.toLowerCase().split("");

  //Puis faire deux boucles (une première pour retirer "splice" les espaces de la 1ere chaine de caractères.
  for (let i = 0; i < table1.length; i++) {
    if (table1[i] === " ") {
      table1.splice(i, 1);
      i--;
    }
  }
  for (let i = table2.length - 1; i >= 0; i--) {
    if (table2[i] === " ") {
      table2.splice(i, 1);
    }
  }
  console.log(table1, table2);
  //on fait enfin une comparaison des deux tableaux pour voir s'ils ont la même taille.
  // s'ils n'ont pas la même taille, return false, s'ils ont la même taille on poursuit.
  if (table1.length !== table2.length) {
    return false;
  } else {
    for (let i = 0; i < table1.length; i++) {
      for (let j = table2.length - 1; j >= 0; j--) {
        // console.log(table1[i], table2[j]);
        if (table1[i] === table2[j]) {
          table2.splice(j, 1);
          break;
        }
      }
    }
    if (table2.length > 0) {
      return false;
    } else {
      return true;
    }

    /*
    // autre solution
    const sortTable1 = table1.sort().join("");
    const sortTable2 = table2.sort().join("");
    if (sortTable1 === sortTable2) {
      return true;
    } else {
      return false;
    }
    */
  }
}

module.exports = anagram;

