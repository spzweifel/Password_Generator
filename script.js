// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  // this seems to have broken the page because of some unknown error over the > sign
  const between = (x, 8, 128) , {
    return: x >= 8 && x <= 128;
  }




  passwordText.value = password;

}

function generatePassword() {
  
}

// Add event listener to generate button
// I think this is on the right track 
generateBtn.addEventListener("click", writePassword);
  let text;
  let person = prompt("Please enter password length: ");
  if (person == null || person == "") {
    closeevent = prompt;
  } else {
    let person = prompt("Please enter character type: ");
  }
