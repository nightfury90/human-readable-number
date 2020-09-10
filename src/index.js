module.exports = function toReadable(number) {
  const data = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "one hundred",
  }

  let result = '';

  if (data[number]) {
    return data[number];
  }

  let str = number.toString();
  let hundreds;

  if (str.length === 3) {
    hundreds = true;
  } else {
    hundreds = false;
  }

  if (hundreds) {
    result = data[str[0]] + " hundred";
    str = str.slice(1);
  }

  if (str > 19) {
    if (hundreds) result += " ";
    result += data[str[0] + "0"];

    if (str[1] > 0) result += " " + data[str[1]];

  } else if (str > 0) {
    result += " " + data[parseInt(str)];
  }

  return result;
}
