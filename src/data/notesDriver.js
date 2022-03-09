const fs = require("fs");
const path = require("path");

/**
 *
 * @returns {boolean}
 */
const readNotes = function () {
  try {
    const data = fs.readFileSync(path.resolve(__dirname, "notes.json"), { encoding: "utf-8" });
    const notes = JSON.parse(data);
    return notes;
  } catch (error) {
    return false;
  }
};

/**
 *
 * @param {object} data
 * @returns {boolean}
 */
const writeNotes = function (data) {
  data = JSON.stringify(data);

  try {
    fs.writeFileSync(path.resolve(__dirname, "notes.json"), data, { encoding: "utf-8" });
    return true;
  } catch (error) {
    return false;
  }
};

module.exports = { readNotes, writeNotes };
