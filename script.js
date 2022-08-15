// Assignment code here
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var criteriaArrays = {
    length : 0,
    upperCase : false,
    upperCaseLetters : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',],
    lowerCase : false,
    lowerCaseLetters : ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    numeric : false,
    numbers : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    specialCharacters : false,
    special : [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '}', '~'],
  options: []    
  
  }

criteriaArrays.length=prompt ("How long will your password be (8-128");
if (criteriaArrays.length <8 || criteriaArrays.length >128){
alert("Password must be greater than 8 & less than 128")
  return writePassword()
}
criteriaArrays.upperCase=confirm("Would you like uppercase character");
criteriaArrays.lowerCase=confirm("Would you like lowercase character");
criteriaArrays.numeric=confirm("Would you like numeric character");
criteriaArrays.specialCharacters=confirm("Would you like specialCharacters character");
if (!criteriaArrays.upperCase && !criteriaArrays.lowerCase && !criteriaArrays.numeric && !criteriaArrays.specialCharacters){
alert("You must choose one option")
  return writePassword()  
}
if (criteriaArrays.upperCase){
 criteriaArrays.options=criteriaArrays.options.concat(criteriaArrays.upperCaseLetters)
}
if (criteriaArrays.lowerCase){
  criteriaArrays.options=criteriaArrays.options.concat(criteriaArrays.lowerCaseLetters)
}
if (criteriaArrays.numeric){
  criteriaArrays.options=criteriaArrays.options.concat(criteriaArrays.numbers)
}
if (criteriaArrays.specialCharacters){
  criteriaArrays.options=criteriaArrays.options.concat(criteriaArrays.special)
}
var password = ""
for (var i = 0 ; i < criteriaArrays.length; i++){
  var index = Math.floor(Math.random()* criteriaArrays.options.length)
  var randomLetter = criteriaArrays.options[index]
  password=password + randomLetter
}

return password 
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);