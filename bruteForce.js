const { decrypt } = require("./decrypt");
const { set } = require("./resource");

function bruteForce(chiper) {
  const allPossiblePlainText = set.map((k, index) => {
    return {
      key: index,
      plainText: decrypt(chiper, index),
    };
  });
  return allPossiblePlainText;
}

module.exports = { bruteForce };
