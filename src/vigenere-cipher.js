const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");

    message = message.toUpperCase();
    key = key.toUpperCase();

    let encryptedMessage = "";

    let messageNums = [];
    let keyNums = [];

    for (let i = 0, j = 0; i < message.length; i++) {
      let charCode = message[i].charCodeAt();
      if (charCode >= 65 && charCode <= 90) {
        messageNums.push(charCode);
        keyNums.push(key[j++ % key.length].charCodeAt());
      } else {
        messageNums.push(charCode);
        keyNums.push(0); // для пробелов и других символов ключ не нужен
      }
    }

    for (var i = 0; i < messageNums.length; i++) {
      if (keyNums[i]) {
        let encryptedTextNum = (messageNums[i] + keyNums[i]) % 26;
        encryptedMessage += String.fromCharCode(encryptedTextNum + 65); //номер буквы + 65 - начало 1й буквы в таблице;
      } else {
        encryptedMessage += String.fromCharCode(messageNums[i]);
      }
    }

    return this.type
      ? encryptedMessage
      : encryptedMessage.split("").reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error("Incorrect arguments!");

    let message = "";

    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      if (
        encryptedMessage[i].charCodeAt() < 65 ||
        encryptedMessage[i].charCodeAt() > 90
      ) {
        message += encryptedMessage[i];
        continue;
      }

      let keyIndexUpper = key[j++ % key.length].toUpperCase().charCodeAt() - 65;
      let encryptedIndex = encryptedMessage[i].toUpperCase().charCodeAt() - 65;
      let charIndex = (encryptedIndex - keyIndexUpper + 26) % 26;
      let messageChar = String.fromCharCode(charIndex + 65);

      message += messageChar;
    }

    return this.type ? message : message.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
