const intersection = (a, b) => {
  // todo

  // PROMPT:
  // Write a function, intersection, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in both of the two arrays.
  // You may assume that each input array does not contain duplicate elements.

  // APPROACH
  // iterate thru array a
  // populating a Set with its contents
  // then iterate thru array b
  // checking the Set for each value
  // important: the methods of adding and accessing a value
  // to/from a Set are constant time operations, becuase this
  // is a hashed data structure

  let resultsArr = [];
  let aSet = new Set(a);

  for (let val of b) {
    if (aSet.has(val)) resultsArr.push(val);
  }

  return resultsArr;

  // this solution below is not great, timewise:
  // return a.filter(val => b.includes(val))
  // because .filter() is o(n), and inside that is .includes() which is
  // also o(n). so this would give o(n^2) time
};

// Time: O(n)
// technically O(n+m) where n is length of array a and m is length of array b
// we build up a set from array a's values: O(n)
// then we iterate thru array b's, each iteration being a constant time operation
// (searching a Set is O(1), whereas searching an array is an O(n) time operation)

// Space: O(n) - where n is length of array a
// b/c we build up a set that will be at most the length of array a
