
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return (matrix === undefined)?[]:matrix.reduce((result, subs, n) => result.concat(n % 2 ? subs.reverse():subs), []);
}
