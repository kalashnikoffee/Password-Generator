//nest arith within array of functions

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

