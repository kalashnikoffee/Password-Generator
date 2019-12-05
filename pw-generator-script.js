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
//-----------------TEST-----------------------
console.log(randomSymbol());
console.log(randomNumber());
console.log(randomLowercase());
console.log(randomUppercase());

//------------NEST THEM ALL-----------------------
var randomFinder = {
    symbol: randomSymbol,
    number: randomNumber,
    lowercase: randomLowercase,
    uppercase: randomUppercase,
}

//----------------------DOM ELEMENTS--------------------------
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

//---------------RANDOM PW FUNCTION-----------------------
function makePW(symbol, number, lowercase, uppercase, length){
	let generatedPassword = '';
    var boxesChecked = lowercase + uppercase + number + symbol;
    console.log("boxes-added", boxesChecked);
    console.log("boxes-individual", symbol, number, lowercase, uppercase);

    var boxArray = [{symbol}, {number}, {lowercase}, {uppercase}].filter(
        item => Object.values(item)[0]
    );
    console.log("boxArray", boxArray);

    if(boxesChecked === 0) {
       return ''; 
    }

    for(let i = 0; i < length; i += boxesChecked){
        boxArray.forEach(type => {
            var finderName = Object.keys(type)[0];
            console.log("Finder-Name", finderName);
            generatedPassword += randomFinder[finderName]();
        });
    }

console.log(generatedPassword);

//--------------------FANFARE PLEASE!!--------------------
return generatedPassword;
}

//---------------COPY TO CLIPBOARD----------------------
function copyPw() {
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");
}

//-----------------SLIDER/PW Length-----------------
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
