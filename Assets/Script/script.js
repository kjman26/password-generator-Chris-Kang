 
// var uppercase = 
// var lowercase =
var specialCharacters = ["1","2", "3"]
// var password = (characters + specialCharacters + uppercase + lowercase)

var parameters = concat[characters, ]
document.querySelector("#generate").addEventListener("click", function(){
    var characters = prompt("How many characters do you want?", "number of characters");
       if (characters <8 || characters>128){
        alert("incorrect amount of characters");}
        
        else if (characters >8 && characters<128){
            alert("perfect!")
        }

        else if (characters<8 || characters>128) {
            alert("try again")
        }
   console.log(characters)

    var specialCharacter = prompt("Do you want a special character?", "enter yes or no")
        if (specialCharacter == "yes") {
            alert("already a bit safer!")
        }
        else if (specialCharacter == "no") {
            alert("okie dokie")
        }
        console.log(specialCharacter)
        // // else (specialCharacter !== "yes" || specialCharacter !== "no") {
        //     alert ("try again..it's a yes or no question")
        // // }
    var uppercase = prompt("Do you want an Uppercase letter?", "enter yes or no"); 
        if (uppercase == "yes"){
            alert ("even safer!")
        }
        else if (uppercase == "no"){
            alert("you sure?")
        }
        console.log(uppercase)
    var lowercase = prompt("Do you want a lowercase letter?", "enter yes or no");
        if (lowercase == "yes"){
            alert("safe as can be!")
        }
        else if (lowercase == "no"){
            alert("maybe you should...?")
        }
        console.log(lowercase)

        var concat = (characters + specialCharacters + uppercase, lowercase)
})
 let str = "characters", "specialCharacter", "uppercase", "lowercase";
  
var generateBtn = document.querySelector("#generate");

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
}
// check!
password.includes (characters, start)
    if (password !== characters) {console.log("please enter proper number of characters")}
password.includes (specialCharacter, start)
    if (password !== specialCharacter) {console.log("please enter proper number of characters")}
password.includes (uppercase, start)
    if (password !== uppercase) {console.log("please enter proper number of characters")}
password.includes (lowercase, start)
    if (password !== lowercase) {console.log("please enter proper number of characters")}