module.exports = function check(str, bracketsConfig) {
  // your solution
  let brackets = bracketsConfig.map((item) => {
    return `${item[0]}${item[1]}`;
  });
  let startLength = str.length;

  while (str.length) {
    brackets.forEach((item) => {
      str = str.replaceAll(item, "");
    });

    if (str.length === startLength) {
      return false;
    }

    startLength = str.length;
  }

  return true;
};
