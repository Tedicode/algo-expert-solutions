function isMonotonic(array) {
  // Write your code here.

  // Time: O(n) - where n is number of elements in original input array. We evaluate each element once
  // Space: O(1) - we do not use additional memory with increasing input

  // APPROACH:
  // if second distinct element is < its previous, then each element therafter must also be < its previous
  // else, if second distinct element is > its previous, each element therafter must also be > its previous
  // once a direction (condition) is determined ( < or >), only return false if this condition is broken
  // if we get through the entire array without returning false, we return true

  // if first elements are === , find the first two that are not === to determine the direction/condition
  let k = 0;
  while (k < array.length - 1 && array[k] === array[k + 1]) k++;
  // if(k === array.length - 1) return true
  let condition = array[k] < array[k + 1] ? "increasing" : "decreasing";
  if (condition === "increasing") {
    for (let i = k; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) return false;
    }
  } else {
    for (let i = k; i < array.length - 1; i++) {
      if (array[i] < array[i + 1]) return false;
    }
  }
  return true;
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;
