function arrayOfProducts(array) {
  // Write your code here.

  // loop through input array
  // for each iteration
  // build up another array with all elements except the current one
  // then call reduce on that array to get the product
  // and push that to the new array that we'll return

  newArray = [];

  for (let i = 0; i < array.length; i++) {
    let arr2 = [];
    for (let k = 0; k < array.length; k++) {
      if (k !== i) arr2.push(array[k]);
    }
    newArray.push(arr2.reduce((a, c) => a * c));
  }

  return newArray;
}

// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;
