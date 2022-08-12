
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === null) {
    return [];
  }
  let l = matrix.length;
  arr = [];
  for (let i = 0; i < l; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < matrix[i].length; j++) {
        arr.push(matrix[i][j]);
      }

    }
    else {
      for (let p = matrix[i].length - 1; p >= 0; p--) {
        arr.push(matrix[i][p]);
      }
    }
  }
  return arr;
}
