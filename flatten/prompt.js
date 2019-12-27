//Create a function that takes in an array with array elements
//Your function should return a single array with non-array elements
// Example:
// flatten([1,['a', 2, [8, true], 7]]) returns [1, 'a', 2, 8, true, 7]

const flatten = arr =>
  arr.reduce(
    (result, inner) =>
      Array.isArray(inner)
        ? result.concat(flatten(inner))
        : result.concat(inner),
    []
  );
