// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var pwLength = getPasswordLength();
  if (pwLength !== null) {
    var uppercase = confirm("Do you want to use uppercase?");
    var lowercase = confirm("Do you want to use lowercase?");
    var splchar = confirm("Do you want to use special characters?");

    var password = generatePassword(pwLength, uppercase, lowercase, splchar);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

function getPasswordLength() {
  while (true) {
    var pwLength = parseInt(
      prompt(
        "what length would you like your password? Please, enter a value between 8 and 128"
      )
    );
    if (pwLength >= 8 || pwLength <= 128) {
      return pwLength;
    }
    alert("Please, enter a value between 8 and 128");
  }
}

//this function puts the generated password into the textbox
function generatePassword(length, uppercase, lowercase, splchar) {
  var charset = "";
  if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (splchar) charset += "!@#$%^&*()";

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
