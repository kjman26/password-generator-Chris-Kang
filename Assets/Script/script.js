 //need variable to hold each set of options (char, spclchar,upper,lower)
 //function that gathers parameters - good
 //inside parameters 
 //long conditional statement - if respond "no" to all = include at least 1
 //create holding array for possibleCharacters
 //concat options if user selects ok into possibleCharacter array (each)
 //pick random options from holding array w/even number of each
 //for loop specific length 
 //create string and put on page 




var possibleCharacters = [];
 
 var lowerCase = ["a",
 "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y",
 "z"];
 var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
 var numbers = ["0","1","2","3","4","5","6","7","8","9"]
 var specials =[
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

function generatePassword(){

    var passLength= prompt("How many characters do you want?", "number of characters");

    if (passLength<8 || passLength>128){
        alert("incorrect amount of passLength");}
    else if(passLength == isNaN){return null}
    //     possibleCharacters = generatePassword.concat(passLength)
    //     console.log(passLength)


    var specials = confirm("click ok if you want special characters")
    //     console.log(specialCharacter)    
    possibleCharacters.concat(specials)

    var upperCase = confirm("click ok for uppercase")  
    possibleCharacters.concat(upperCase)
        console.log(upperCase)  


    var lowerCase = confirm("click ok for lowercase letter")
    possibleCharacters.concat(lowerCase)
        console.log(lowerCase)
    }   
//store input and create password
vargenerateBtn = document.querySelector("#generate")

function writePassword() {
    var password = generatePassword();
    var passwordText=document.querySelector("#password");

    passwordText.value = password;
}

password.includes (characters, start)
    if (password !== characters) {console.log("please enter proper number of characters")}
password.includes (specialCharacter, start)
    if (password !== specialCharacter) {console.log("please enter proper number of characters")}
password.includes (uppercase, start)
    if (password !== uppercase) {console.log("please enter proper number of characters")}
password.includes (lowercase, start)
    if (password !== lowercase) {console.log("please enter proper number of characters")
    }
