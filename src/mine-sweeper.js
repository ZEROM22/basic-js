const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = new Array(rows);

  for (let i = 0; i < rows; i++) {
    result[i] = new Array(cols).fill(0); //новая строка, изначаль заполенная 0
    for (let j = 0; j < cols; j++) {
      //для каждой ячейки проходим поле заново
      for (let dx = 0; dx < rows; dx++) {
        for (let dy = 0; dy < cols; dy++) {
          if (
            !(i == dx && j == dy) && //если это не клетка, которую проверяем
            Math.abs(i - dx) < 2 && //если разница не дальше 1й клетки по x и y
            Math.abs(j - dy) < 2 &&
            matrix[dx][dy] //и если клетка true
          )
            result[i][j]++;
        }
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper,
};
