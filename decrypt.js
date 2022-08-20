const { set } = require("./resource");

function decrypt(cipher, key) {
  const decrypted = cipher.split("").map((c) => {
    const index = set.findIndex((i) => i === c);
    let value = (index - key) % 53;
    if (value < 0) value = 53 + value;
    const plain = set[value];
    return plain;
  });

  return decrypted.join("");
}

module.exports = { decrypt };
