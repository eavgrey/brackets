module.exports = function check(str, bracketsConfig) {
  // your solution
  let brackets = bracketsConfig.map((item) => {
    return `${item[0]}${item[1]}`;
  });
  console.log(brackets);

  while (str.length) {
    brackets.forEach((item) => {
      str = str.replaceAll(item, "");
    });
  }
  if (str.length === 0) {
    return true;
  } else {
    return false;
  }
};
