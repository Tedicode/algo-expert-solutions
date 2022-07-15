function arrayOfProducts(array) {
  // Write your code here.

  // Optimized approach:
  // instead of nested loop that repeats multiplication
  // store the multiplication work in array(s)
  // then draw on those products to create the final products array

  let leftProducts = new Array(array.length).fill(1);
  let rightProducts = new Array(array.length).fill(1);
  let products = [];

  // build up left array with running products of all elements to left of i
  let runningLeftProduct = 1;
  for (let i = 0; i < array.length; i++) {
    leftProducts[i] = runningLeftProduct;
    runningLeftProduct *= array[i];
  }

  // build up right array with running products of all elements to right of i
  let runningRightProduct = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    rightProducts[i] = runningRightProduct;
    runningRightProduct *= array[i];
  }

  // build up array to return: multiplying left and right products at each position i
  for (let i = 0; i < array.length; i++) {
    products.push(leftProducts[i] * rightProducts[i]);
  }

  return products;
}
// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;
