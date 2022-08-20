const { set } = require("./resource");

function encrypt(plainText, key) {
  const plainArr = plainText.split("");
  const encrypted = plainArr.map((p) => {
    const index = set.findIndex((l) => l === p);
    return set[(index + key) % 53];
  });
  return encrypted.join("");
}

module.exports = { encrypt };
