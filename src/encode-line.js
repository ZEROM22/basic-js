const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encoded = "";
  let count = 1;
  let prevChar = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i]; //для удобства записываем в переменную

    if (char === prevChar) {
      //пока не новый символ, увеличиваем счетчик
      count++;
    } else {
      //если символ новый, в вых. строку записываем счетчик (если он больше 1) и букву
      //в переменную prevChar указываем новую букву, а счетчик сбрасываем до 1
      if (count > 1) {
        encoded += count;
      }
      encoded += prevChar;
      prevChar = char;
      count = 1;
    }
  }

  if (count > 1) encoded += count; //для последней буквы, если она так же повторялась
  encoded += prevChar;

  return encoded;
}

module.exports = {
  encodeLine,
};
