const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sortedHeights = arr
    .filter((height) => height !== -1)
    .sort((a, b) => a - b); //сортируем, исключая -1

  let index = 0;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    //проходимся по изначальному массиву, если элемент -1 - вставляем в result
    //если число - вставляем по индексу число из оригинального массива
    if (arr[i] === -1) {
      result.push(-1);
    } else {
      result.push(sortedHeights[index]);
      index++;
    }
  }

  return result;
}

module.exports = {
  sortByHeight,
};
