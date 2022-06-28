var possibleCharacters = ""
var password = ""
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789"
var specials = "!@#$%^&*()+-"
var passLength;   

document.querySelector("#generate").addEventListener("click", writePassword)

function generatePassword() {

    passLength = parseInt(prompt("How many characters do you want?", "number of characters between 8 and 128"));
    
    if (passLength < 8 || passLength > 128) {
        alert("incorrect amount of passLength");
    }
    else {
        // // possibleCharacters.+=passLength);  
        // console.log(passLength)
    }
    
    var includesSpecials = confirm("click ok if you want special characters")
    if (includesSpecials === true) {
        possibleCharacters+=specials
    }
    console.log(possibleCharacters)

    var includesUpperCase = confirm("click ok for uppercase")
    if (includesUpperCase === true) {
        possibleCharacters+=upperCase
    }

    console.log(possibleCharacters)

    var includesLowerCase = confirm("click ok for lowercase letter")
    if (includesLowerCase === true) {
        possibleCharacters+=lowerCase
        console.log(possibleCharacters)
    }
    
    
    let includesNumbers = confirm("click ok if you want numbers")
    if (includesNumbers === true) {
        possibleCharacters+=numbers
        console.log(possibleCharacters)
    };    

    if (specials===false && upperCase===false && lowerCase===false && numbers===false){
        alert("You must select ok for at least one unique character")
    };     

    console.log(possibleCharacters)
    for (let i = 0; i <= passLength; i++) {
        const randomCharacter = possibleCharacters.charAt(Math.floor(Math.random()*possibleCharacters.length))
        password = password + randomCharacter
    };

return password
};

vargenerateBtn = document.querySelector("#generate")

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    }

