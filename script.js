// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

//this function puts the generated password into the textbox
function generatePassword() {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 8;

  for (var i=0; i<passwordLength; i++){
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber,randomNumber+1);
  }
  document.getElementById("password").value = password;
  //figure out how to return what I want it to return and not what's typed here
  //return "#password";
}

function promptMe(){
  var userAdjective = prompt("how long is the password?");
  alert (userAdjective);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
let text;
onclick=let person = prompt("Please enter password length: ");
if (person == null || person == "") {
  closeevent = prompt;
} else {
  let person = prompt("Please enter character type: ");
}

 

  