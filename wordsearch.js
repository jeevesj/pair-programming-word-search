const wordSearch = (letters, word) => {
  // chain two reducers to create vertical ver (max 4 lines)
  // c style for loop

  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
    if (l.split("").reverse().join("").includes(word)) return true;
  }

  const verticalArray = [];

  for (let i = 0; i < letters[0].length; i++) {
    let tempArray = [];
    for (let j = 0; j < letters.length; j++) {
      tempArray.push(letters[j][i]);
    }
    verticalArray.push(tempArray);
  }

  const verticalJoin = verticalArray.map((arr) => arr.join(""));

  for (l of verticalJoin) {
    if (l.includes(word)) return true;
    if (l.split("").reverse().join("").includes(word)) return true;
  }

  return false;

  //length of both
};

// DEPRECATED RESULT
// [
//   ["A", "S", "Y", "H", "W", "B", "U", "O"],
//   ["W", "E", "F", "M", "H", "F", "B", "D"],
//   ["C", "I", "C", "J", "C", "R", "T", "C"],
//   ["F", "N", "F", "T", "S", "E", "W", "A"],
//   ["Q", "F", "Q", "E", "Y", "N", "A", "K"],
//   ["U", "E", "U", "V", "E", "E", "P", "U"],
//   ["A", "L", "A", "R", "R", "Y", "A", "A"],
//   ["L", "D", "L", "G", "L", "B", "I", "S"],
//   [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
// ];


// CURRENT RESULT
// [
//   ["A", "S", "Y", "H", "W", "B", "U", "O", "E"],
//   ["W", "E", "F", "M", "H", "F", "B", "D", "Z"],
//   ["C", "I", "C", "J", "C", "R", "T", "C", "K"],
//   ["F", "N", "F", "T", "S", "E", "W", "A", "F"],
//   ["Q", "F", "Q", "E", "Y", "N", "A", "K", "Q"],
//   ["U", "E", "U", "V", "E", "E", "P", "U", "U"],
//   ["A", "L", "A", "R", "R", "Y", "A", "A", "A"],
//   ["L", "D", "L", "G", "L", "B", "I", "S", "L"],
// ];


module.exports = wordSearch