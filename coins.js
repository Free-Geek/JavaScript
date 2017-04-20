function coins(amount, value) {
  amount *= 100;
  value *= 100;
  var count = 0;
  var tally = 0;

  while (tally + value <= amount) {
    count += 1;
    tally += value;
  }

  return count;
}
