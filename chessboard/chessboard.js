function chessboard() {
  // on crée un tableau lettre vide
  let lettre = [];
  // on rempli ce tableau avec les caractères de "a" (code ASCII 97) à "h" (code ASCII 104) 
  for (let i = 0; i < 8; i++) {
    lettre[i] = String.fromCharCode(i + 97);
  }
  // console.log("Lettres: ", lettre);

  // on crée un tableau finalTable vide
  let finalTable = [];

  // on rempli finalTable avec les tableaux des différentes colonnes
  for (let j = 0; j < lettre.length; j++) {
    // on crée un tableau vide column
    let column = [];
    // on rempli column avec le caractère lettre[i] et " - " et la valeur de i
    for (let i = 1; i <= 8; i++) {
      column[i - 1] = lettre[j] + " - " + i;
      // column.push("a - " + i);
    }
    // on ajoute le tableau column à la fin de finalTable
    finalTable.push(column);
  }
  // on retourne finalTable
  return finalTable;
}


console.log(chessboard());

module.exports = chessboard;