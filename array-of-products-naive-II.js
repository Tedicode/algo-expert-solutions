function arrayOfProducts(array) {
  // Write your code here.

  // INSTEAD
  // use reduce in each iteration to create a product:
  // multiply the accumulator by the current element only IF that index is NOT "i"

  // Time: O(n^2) - for loop iterates thru input array, and inside for loop using reduce on the array
  // Space: O(n) - storing an array the length of n

  newArray = [];

  for (let i = 0; i < array.length; i++) {
    let nextProduct = array.reduce((a, c, idx) => {
      if (idx === i) return a * 1;
      else return a * c;
    }, 1);

    newArray.push(nextProduct);
  }

  return newArray;
}

// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;
