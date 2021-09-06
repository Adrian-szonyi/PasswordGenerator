// Assignment Code

var PasswordCriteria = {
  length: "",
  Uppercase: "yes/no",
  SpecialCharacters: "yes/no",
};

var Characters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
];

var generatePassword = function () {
  var userChoice = confirm("Would you like to generate a password?");

  if (!userChoice) {
    return;
  }

  var Criteria = window.prompt(
    "Write the following criteria you would like for your password: length, special characters and uppercase"
  );

  if (Criteria === "length") {
    var PasswordLength = window.prompt(
      "How long would you like your password to be? Minimum 8 and maximum 128 characters"
    );
    if (PasswordLength < 8) {
      window.prompt("Please choose a length between 8 and 128");
    } else if (PasswordLength > 128) {
      window.prompt("Please choose a length between 8 and 128");
    } else {
      PasswordCriteria.length = PasswordLength;
      delete PasswordCriteria.Uppercase;
      delete PasswordCriteria.SpecialCharacters;
    }
    console.log(PasswordCriteria);
    var Password = "";
    for (var i = 0; i < PasswordLength; i++) {
      var index = Math.floor(Math.random() * Characters.length);
      Password += Characters[index] + "";
    }
    console.log(Password);
    return Password;
  } else if (Criteria === "special characters") {
    console.log(Criteria);
  } else if (Criteria === "length special characters and uppercase") {
    console.log("requested special characters and length and uppercase");
  }
}
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

// generatePassword();
