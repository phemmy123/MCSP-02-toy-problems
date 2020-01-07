/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
  // TODO: Implement me!
};
function translateRomanNumeral (romanNumeral) {
  // create a counter variable and set the value to equal 0
  var counter = 0;
  // create a result variable and set the value to equal 0
  var result = 0;
  // iterate through the input which is the romanNumeral
  for (var i = 0; i < romanNumeral.length; i++) {
    // create a variable 
    var currentLetter = DIGIT_VALUES[romanNumeral[i]];
    var nextLetter = DIGIT_VALUES[romanNumeral[i+1]] || 0;
    if (currentLetter > nextLetter) {
      result += currentLetter;
      counter += result;
      result = 0;
    } else if (currentLetter < nextLetter) {
      result += currentLetter;
      counter -= result;
      result = 0;
    } else {
      result += currentLetter;
    }
  }
  return counter;
}
