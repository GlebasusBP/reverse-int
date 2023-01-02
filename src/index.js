module.exports = function reverse (n) {
  const arrToString = n.toString().split('').reverse().join('');
  const reversed = parseFloat(arrToString);
  if (n[0] % 2 === 0) {
    return reversed * (-1);
  }
  return reversed;
}
