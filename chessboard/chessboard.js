function chessboard() {
  const result = [];
  for (let j = 97; j < 105; j++) {
    const colonne = [];

    for (let i = 0; i < 8; i++) {
      // colonne[i] =`${String.fromCharCode(97)} - ${i+1}`;
      colonne.push(`${String.fromCharCode(j)} - ${i + 1}`);
    }
    result.push(colonne);
  }
  return result;
}
console.log(chessboard());

module.exports = chessboard;