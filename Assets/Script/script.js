var possibleCharacters = [];
var password = ""
var lowerCase = ["a",
    "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y",
    "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specials = [
    '@',
    '%',
    '+',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.',
];

document.querySelector("#generate").addEventListener("click", writePassword)

function generatePassword() {

    var passLength = prompt("How many characters do you want?", "number of characters between 8 and 128");

    if (passLength < 8 || passLength > 128) {
        alert("incorrect amount of passLength");
    }
    else if (passLength === true) {possibleCharacters = possibleCharacters.concat(passLength); 
    } 
    console.log(passLength)

    specials = confirm("click ok if you want special characters")
    if (specials === true) {possibleCharacters.concat(specials)
    }
    console.log(specials)

     upperCase = confirm("click ok for uppercase")
    if (upperCase === true){possibleCharacters = possibleCharacters.concat(upperCase)
    }
    console.log(upperCase)

    lowerCase = confirm("click ok for lowercase letter")
    if (lowerCase === true){possibleCharacters =
    possibleCharacters.concat(lowerCase)
    console.log(lowerCase)
    };
    
    numbers = confirm("click ok if you want numbers")
    if (numbers === true) {possibleCharacters = possibleCharacters.concat(numbers)
    console.log(numbers)
};
    for (let i = 0; i <= passLength; i++) {
    password = possibleCharacters.toString(Math.floor(Math.random()*possibleCharacters.length))

};
    if (specials===false && upperCase===false && lowerCase===false && numbers===false){alert("You must select ok for at least one unique character")
};  


return password
};

vargenerateBtn = document.querySelector("#generate")

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    }

