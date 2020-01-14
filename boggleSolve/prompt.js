// * Given string containing combination of letters from a-z,
// * each character has the value of its position in the alphabet
// * i.e. a=1, z=26 etc.
// return the sum of the values of each letter in string


// create a variable of the string alphabeth by putting all the letters in a string
var boggleSolver = (str)=>{
var alphabet = 'a, b, c...z'
// create a variable letters
var letters = str.split('')
return letters.reduce((sum, i)=>{
    return alphabet.indexOf(letters[i])
})
}
