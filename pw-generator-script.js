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
    lowerCase: randomLowercase(),
    uppercase: randomUppercase(),
}

//Set up the HTML objects that we will fill in


//Set up choices for user. ~Length and symbol/number/upper/lower. Use prompt? Checkboxes? Probably need to use a prompt.
//not sure I can figure out how to validate checkboxes in time to complete by wed.


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
