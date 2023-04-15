const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let newArr = [];

  names.forEach((elem) => {
    if (newArr.includes(elem)) {
      let num = 1;
      while (newArr.includes(elem + "(" + num + ")")) {
        num++;
      }
      newArr.push(elem + "(" + num + ")");
    } else newArr.push(elem);
    //перетаскиваем каждый элемент в новый массив
    //тогда при проверке "(num)" будет присваиваться элементам в порядке их добавления
  });

  return newArr;
}

module.exports = {
  renameFiles,
};
