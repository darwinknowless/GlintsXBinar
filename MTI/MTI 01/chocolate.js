let temp = 0;

const Bonus = (cokelat) => {
  let result = 0;
  if (cokelat >= 5) {
    let bonus = Math.floor(cokelat / 5);
    if (temp === 0) temp = cokelat + bonus;
    else if (temp >= 0) temp += bonus;
    if (bonus >= 5) return Bonus(bonus);
    else if (bonus < 5) {
      result = temp;
      temp = 0;
      return result;
    }
  }
};

const test = (testCase, result) => {
  if (testCase !== result) return console.log(false);
  return console.log(true);
};

test(Bonus(60), 74);
test(Bonus(100), 124);
test(Bonus(1000), 1249);
test(Bonus(1234), 1539);
