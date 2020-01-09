/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

var allAnagrams = function(string) {
  // create a variable currAnagram and set it to be equal to an empty array
  var currAnagram = [];
  //split string to be iterable
  var split = string.split('');
  // iterate through the string
  for (var i = 0; i < split.length; i++) {
    currAnagram.push(split[i]);
    for (var j = 0; j < split.length; j++) {
      if (i !== j) {
        currAnagram.push(split[j]);
      }
    }
  }
  
  return currAnagram
}