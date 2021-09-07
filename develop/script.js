

var generatePassword = function () {
  var userChoice = confirm("Would you like to generate a password?");

  if (!userChoice) {
    return;
  }

  var PasswordLength = window.prompt(
    "How many characters would you like your password to be?"
  );
//password length requirement
  if (PasswordLength < 8 || PasswordLength > 128) {
    window.alert(
      "The minimum password length is 8 and the maximum is 128, please try again."
    );
    return;
  } else {
    UseNumbers = confirm("would you like to include numbers?");
    UseSymbols = confirm("would you like to include symbols?");
    UseLower = confirm("would you like to include lowecase letters?");
    UseUpper = confirm("would you like to include uppercase letters?");
  }
    var Number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var symbols = [
      " ",
      "!",
      '"',
      "#",
      "$",
      "%",
      "&",
      "'",
      "(",
      ")",
      "*",
      "+",
      ",",
      "-",
      ".",
      "/",
      ";",
      "<",
      "=",
      ">",
    ];
    var Number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var included = [];
    var Uppercase = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    var lowercase = [
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
      "y",
      "z",
    ];

    //Combining all selected criteria into a single array string
    if (UseNumbers) {
      included = included.concat(Number);
    };
    if (UseSymbols) {
      included = included.concat(symbols);
    };
    if (UseUpper) {
      included = included.concat(Uppercase);
    };
    if (UseLower) {
      included = included.concat(lowercase);
    };
    if (!UseLower && !UseUpper && !UseSymbols && !UseNumbers) {
      window.alert(
        "At least one criteria is required. Please try again"
      );
    }

    //Randomly selecting a new string of values from the combined array
    if (UseLower || UseUpper || UseSymbols || UseNumbers) {
    var password = "";
    for (var i = 0; i < PasswordLength; i++) {
      password += included[Math.floor(Math.random() * included.length)];
    };
    console.log(included);
    return password
  }


};
var included = [];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

 // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

