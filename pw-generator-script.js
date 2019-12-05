//nest arith within array of functions
//HTML CHAR CODES
//https://www.rapidtables.com/web/html/html-codes.html

//SYMBOL MAKER - uses fromCharCode to assign a random number between 33-47. ie ( !"#$%&'()*+,-./ )
function randomSymbol() {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}

//RANDOM NUMBER MAKER - uses fromCharCode to assign a random number between 48-57. ie ( 1-10 )
function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

//RANDOM LOWERCASE LETTER MAKER - uses fromCharCode to assign a random number between 97-122. ie ( a-z )
function randomLowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//RANDOM UPPERCASE LETTER MAKER - uses fromCharCode to assign a random number between 65-90. ie ( A-Z )
function randomUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
//TEST to see if functions are working properly
console.log(randomSymbol());
console.log(randomNumber());
console.log(randomLowercase());
console.log(randomUppercase());

//nest the functions together as one variable
var randomFinder = {
    symbol: randomSymbol(),
    number: randomNumber(),
    lowercase: randomLowercase(),
    uppercase: randomUppercase(),
}

//Set up the HTML objects that we will fill in
var lengthChoice = document.getElementById("myRange");
var symbolChoice = document.getElementById("symbolCheck");
var numberChoice = document.getElementById("numberCheck");
var lowerChoice = document.getElementById("lowerCheck");
var upperChoice = document.getElementById("upperCheck");
var generateUse = document.getElementById("generate");
var clipboardUse = document.getElementById("copy");
var securePassword = document.getElementById("password");

generateUse.addEventListener("click", function(){
    var lengthVar = +lengthChoice.value;
    var symbolVar = symbolChoice.checked;
    var numberVar = numberChoice.checked;
    var lowerVar = lowerChoice.checked;
    var upperVar = upperChoice.checked;

    
    console.log(symbolVar);
    console.log(numberVar);
    console.log(lowerVar);
    console.log(upperVar);

    securePassword.innerText = makePW(symbolVar, numberVar, lowerVar, upperVar, lengthVar);
});

function makePW(symbol, number, lowercase, uppercase, length){
	let generatedPassword = '';
    var boxesChecked = lowercase + uppercase + number + symbol;
    console.log(boxesChecked);
    console.log(lowercase, uppercase, number, symbol);

	
	// Doesn't have a selected type
	// if(typesCount === 0) {
	// 	return '';
	// }
	
	// create a loop
	//for(let i=0; i<length; i+=typesCount) {
// 		typesArr.forEach(type => {
// 			const funcName = Object.keys(type)[0];
// 			generatedPassword += randomFunc[funcName]();
// 		});
// 	}
	
// 	const finalPassword = generatedPassword.slice(0, length);
	
}

//1- set up password variable
//2- ignore unchecked boxes
//3- loop until length is reached 
//4- call funtion to generate each relevant pw char type
//5- print pw on site








//Validate selection, ie - At least one must be selected.


//Create for loop with if conditionals that cycles randomFinder (create new array? not sure if it works like an array) 
//for however long the password will be, picking the selected parameters


//print the result in the password id box

//Slider info so it shows the right number
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
