module.exports = function reverse (n) {
  const str = n.toString();
  const arr = str.split('');
  const arrRevered = arr.reverse();
  const arrToString = arrRevered.join('');
  const reversed = parseFloat(arrToString);
  if (n[0] % 2 === 0) {
    return reversed * (-1);
  }
  return reversed;
}
