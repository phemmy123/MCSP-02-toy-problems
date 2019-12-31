/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

// var firstNonRepeatedCharacter = function(string) {
//   // TODO: your solution here
// };
function firstNonRepeatedCharacter(str) {
  // declare a variable and set it equal to an empty array
  let count = []
  // declare another variable and set it equal to zero
  let newCount = 0;
  // make a for loop to loop through the array
  for (let i = 0; i < str.length; i++) {
    //  make a conditional statement
      if (!count[str.charAt(i)]) {
          count[str.charAt(i)] = newCount + 1;
      }
      else {
          count[str.charAt(i)] = count[str.charAt(i)] + 1;
      }
  }
  for (let key in count) {
      if (count[key] === 1) {
          return key;
      }
  }
  return null;
}