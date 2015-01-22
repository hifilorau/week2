
// Declare two variables, and give them
// values. Note, you can declare multiple
// variables with one var statement by
// placing a comma between the variable
// statements.
var x = 0,
y = 0;

var newFarenheit = document.getElementById("new-farenheit");
var newCelsius = document.getElementById("new-celsius");
var convertToCelButton = document.getElementById("convert-to-c-button");
var tempCelsius = 0;
var tempFarenheit = 0;


function convertToCelsius() {
  tempCelsius = Math.round((x - 32) * 5 / 9);
  document.querySelector('.answer-span').textContent= tempCelsius + " Celsius";
  newFarenheit.value = "";

}

function convertToFarenheit() {
  tempFarenheit = Math.round(y * 9 / 5 + 32);
  document.querySelector('.answer-span').textContent = tempFarenheit + " degrees Farenheit";
  newCelsius.value = "";
}

// setX takes a string as a parameter, casts it
// to a number, and stores that value in x
function setX(xString) {
  x = Number(xString);
}

// setY does the same thing as setX, only
// storing the value in y
function setY(yString) {
  y = Number(yString);
}




// function animateFunc(){            };
//
// document.getElementById("convert-to-c").addEventListner('click', animateFunc, false);
