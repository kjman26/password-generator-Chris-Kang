//need variable to hold each set of options (char, spclchar,upper,lower)
//function that gathers parameters - good
//inside parameters 
//long conditional statement - if respond "no" to all = include at least 1
//create holding array for possibleCharacters
//concat options if user selects ok into possibleCharacter array (each)
//pick random options from holding array w/even number of each
//for loop specific length 
//create string and put on page 




var possibleCharacters = "";
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


//alerts and pop ups for parameters
document.querySelector("#generate").addEventListener("click", writePassword)

function generatePassword() {

    var passLength = prompt("How many characters do you want?", "number of characters");

    while (passLength < 8 || passLength > 128) {
        alert("incorrect amount of passLength");
    }

    if (passLength === true) { possibleCharacters = possibleCharacters.concat(passLength); }
    console.log(passLength)

    var specials = confirm("click ok if you want special characters")
    possibleCharacters.concat(specials)
    console.log(specials)

    var upperCase = confirm("click ok for uppercase")
    possibleCharacters.concat(upperCase)
    console.log(upperCase)

    var lowerCase = confirm("click ok for lowercase letter")
    console.log(lowerCase)

    possibleCharacters.concat(lowerCase)
    console.log(lowerCase)

    var numbers = confirm("click ok if you want numbers")
    possibleCharacters.concat(numbers)
    console.log(numbers)

    for (var i = 0; i <= passLength; i++) {
    password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length))
};
return password;

if (specials===false && upperCase===false && lowerCase===false && numbers===false){alert("You must select ok for at least one unique character")}
    

}
vargenerateBtn = document.querySelector("#generate")

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// while(
//     includesnumbers === false &&
//     includeslowerCase === false &&
//     includesupperCase === false &&
//     includesnumbers === false);
