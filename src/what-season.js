const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  try {
    let season = ["winter", "spring", "summer", "autumn (fall)"];

    if (new Date(date.toString()).getYear() != date.getYear())
      throw new Error("Invalid date!");

    return season[Math.floor(((date.getMonth() + 1) % 12) / 3)];
  } catch (e) {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason,
};
