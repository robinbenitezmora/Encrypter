function encryption(message) {
    for (let i = 0; i < message.length; i++) {
        let word = message.split(' ').join('').toLowerCase();
        
        for (let j = 0; j < word.length; j++) {
            if (word[j] === "e") {
                word[j] = "enter";
            } 
            else if (word[j] === "i") {
                word[j] = "imes";
            }
            else if (word[j] === "a") {
              word[j] = "ai";
            }
            else if (word[j] === "o") {
              word[j] = "ober";
            }
            else if (word[j] === "u") {
              word[j] = "ufat";
            }
            else 
            {
              word[j] = word[j];
            }
        }
    }
    return word;
} 

function decryption(message) {
    for (let i = 0; i < message.length; i++) {
        let word = message.split(' ').join('').toLowerCase();
        
        for (let j = 0; j < word.length; j++) {
            if (word[j] === "enter") {
                word[j] = "e";
            } 
            else if (word[j] === "imes") {
                word[j] = "i";
            }
            else if (word[j] === "ai") {
              word[j] = "a";
            }
            else if (word[j] === "ober") {
              word[j] = "o";
            }
            else if (word[j] === "ufat") {
              word[j] = "u";
            }
            else 
            {
              word[j] = word[j];
            }
        }
    }
    return word;
}

export { encryption, decryption };

const result = encryption("Hello World");

console.log(result); // "Henterllo Woberrld"

const result2 = decryption("Henterllo Woberrld");

console.log(result2); // "Hello World"


