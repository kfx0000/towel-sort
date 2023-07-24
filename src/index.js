
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const towel = (result, subs, n) => result.concat(n % 2 ? subs.reverse():subs);
  if(matrix === undefined) return [];
  else return matrix.reduce(towel, []);
}
