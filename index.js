const { bruteForce } = require("./bruteForce");
const { decrypt } = require("./decrypt");
const { encrypt } = require("./encrypt");

const plainText = "Hello This Is Langesh";

const key = Math.ceil(Math.random() * 52);

console.log("\n*** Encrypting ***\n");
const cipher = encrypt(plainText, key);

console.log({
  plainText,
  key,
  cipher,
});

console.log("\n*** Decrypting ***\n");

const decrypted = decrypt(cipher, key);

console.log({
  cipher,
  key,
  decrypted,
});

console.log("\n*** Cracking Key ***\n");

const crackedValues = bruteForce(cipher);

console.log(crackedValues);
