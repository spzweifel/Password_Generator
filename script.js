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
  var pwLength = prompt("what length would you like your password? Please, enter a value between 8 and 128");
  console.log(pwLength);
  if (pwLength < 8 || pwLength > 128) {
    alert("Please, enter a value between 8 and 128");
    return;
  }
  var uppercase = confirm ("Do you want to use uppercase?");
  if (uppercase = true) {
    
  }
  var lowercase = confirm ("Do you want to use lowercase?");
  if (lowercase = true) {

  }
  var splchar = confirm ("Do you want to use special characters?");
  if (splchar = true) {

  }

  
  //if/else stuff after this
  //if pwLength (x <= 8 || x >= 128)
  var chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (var i = 0; i < pwLength; i++) {
    //get rid of all this
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password;
  //figure out how to return what I want it to return and not what's typed here
  //return "#password";
}

function promptMe() {
  var userAdjective = prompt("how long is the password?");
  alert(userAdjective);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
