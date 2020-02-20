
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix !== undefined ? matrix.reduce((prev, curr, i) => i % 2 === 0 ?  [...prev, ...curr] :  [...prev, ...curr.reverse()],[]) : [];
}
