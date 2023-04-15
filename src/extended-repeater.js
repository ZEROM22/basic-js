const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options) return str;
  if (!options.hasOwnProperty("separator")) options.separator = "+";
  if (!options.hasOwnProperty("additionSeparator"))
    options.additionSeparator = "|";

  let addition;
  if (options.additionRepeatTimes)
    addition = new Array(options.additionRepeatTimes)
      .fill(options.addition + "") //костыль для null
      .join(options.additionSeparator);
  else if (options.addition) addition = options.addition; //если есть addition
  else addition = "";

  let repeatedStr = new Array(options.repeatTimes)
    .fill(str + addition)
    .join(options.separator);
  return repeatedStr;
}

module.exports = {
  repeater,
};
