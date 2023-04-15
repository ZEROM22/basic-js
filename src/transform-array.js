const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");

  let newArr = arr.slice();
  newArr = newArr
    .filter((el, i) => {
      if (arr[i - 1] === "--discard-next") return null;
      if (arr[i + 1] === "--discard-prev") return null;
      return el;
    })
    .map((el, i) => {
      if (el === "--double-next") return arr[i + 1];
      if (el === "--double-prev") return arr[i - 1];
      return el;
    });

  let control = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev",
  ];
  //удаляем все null, undefined и секвенции
  newArr = newArr.filter(
    (item) => !control.includes(item) && item !== null && item !== undefined
  );
  let hasControl = control.find((item) => arr.includes(item));

  return hasControl ? newArr : arr;
}

module.exports = {
  transform,
};
