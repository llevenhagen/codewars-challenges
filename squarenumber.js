var isSquare = function (n) {
  if (Number.isInteger(Math.sqrt(n))) {
    return true
  } else {
    return false
  }
}
console.log(isSquare(25));
// console.log(Math.sqrt(3));
