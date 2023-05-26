const textArea = document.querySelector('.text-area');
const message = document.querySelector('.message');

function btnEncrypter() {
  const encryptedText = encrypter(textArea.value);
  message.value = encryptedText;
  textArea.value = "";
  message.style.backgroundImage = "none";
}

function encrypter(stringEncrypted){
  let codeMatrix = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']]
  stringEncrypted = stringEncrypted.toLowerCase();

  for (let i = 0; i < codeMatrix.length; i++) {
    if (stringEncrypted.includes(codeMatrix[i][0])) {
      stringEncrypted = stringEncrypted.replaceAll(codeMatrix[i][0], codeMatrix[i][1]);
    }
  }
  return stringEncrypted;
}

function btnDecrypter() {
  const decryptedText = decrypter(textArea.value);
  message.value = decryptedText;
  textArea.value = "";
  message.style.backgroundImage = "none";
}

function decrypter(stringDecrypted){
  let codeMatrix = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']]
  stringEncrypted = stringDecrypted.toLowerCase();

  for (let i = 0; i < codeMatrix.length; i++) {
    if (stringDecrypted.includes(codeMatrix[i][1])) {
      stringDecrypted = stringEncrypted.replaceAll(codeMatrix[i][1], codeMatrix[i][0]);
    }
  }
  return stringDecrypted;
}

function btnCopy() {
  const copyText = copy(message.value);
  textArea.value = copyText;
  message.value = "";
}

function copy(messageText){
  let messageCopied = messageText;
  return messageCopied;
}

// function copyAndEncryptToDiv () {
//     const text = document.getElementById("message").value;
//     const encryptedText = encryption(text);
//     document.getElementById("text-output").textContent = encryptedText;
// }

// function copyAndDecryptToTextArea () {
//     const text = document.getElementById("text-output").textContent;
//     const decryptedText = decryption(text);
//     document.getElementById("message").value = decryptedText;
// }

// function encryption(message) {
//     for (let i = 0; i < message.length; i++) {
//         let word = message.split(' ').join('').toLowerCase();
        
//         for (let j = 0; j < word.length; j++) {
//             if (word[j] === "e") {
//                 word[j] = "enter";
//             } 
//             else if (word[j] === "i") {
//                 word[j] = "imes";
//             }
//             else if (word[j] === "a") {
//               word[j] = "ai";
//             }
//             else if (word[j] === "o") {
//               word[j] = "ober";
//             }
//             else if (word[j] === "u") {
//               word[j] = "ufat";
//             }
//             else 
//             {
//               word[j] = word[j];
//             }
//         }
//     }
//     return word;
// } 

// function decryption(message) {
//     for (let i = 0; i < message.length; i++) {
//         let word = message.split(' ').join('').toLowerCase();
        
//         for (let j = 0; j < word.length; j++) {
//             if (word[j] === "enter") {
//                 word[j] = "e";
//             } 
//             else if (word[j] === "imes") {
//                 word[j] = "i";
//             }
//             else if (word[j] === "ai") {
//               word[j] = "a";
//             }
//             else if (word[j] === "ober") {
//               word[j] = "o";
//             }
//             else if (word[j] === "ufat") {
//               word[j] = "u";
//             }
//             else 
//             {
//               word[j] = word[j];
//             }
//         }
//     }
//     return word;
// }

// export { copyAndEncryptToDiv, copyAndDecryptToTextArea };

// const result = encryption("Hello World");

// console.log(result); // "Henterllo Woberrld"

// const result2 = decryption("Henterllo Woberrld");

// console.log(result2); // "Hello World"
