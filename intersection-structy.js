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
