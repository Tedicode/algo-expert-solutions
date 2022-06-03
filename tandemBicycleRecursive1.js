function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Write your code here.

  // recursive approach (WITH side effect)

  // create a recursive helper function, but before we even start recursing,
  // we will establish which route to take: the optimal or non-optimal pairs
  // if fastest === false, we'll pass two ascending lists
  // else, we'll pass one ascending and one descending list
  // the recursion will simply take in two lists and the index
  // and it will have a side effect of incrementing the sum, which we'll initialize outside of the helper function

  redShirtSpeeds.sort((a, b) => a - b);
  if (fastest) blueShirtSpeeds.sort((a, b) => b - a);
  else blueShirtSpeeds.sort((a, b) => a - b);

  let totalSpeed = 0;

  function helper(redList, blueList, i) {
    if (i === redList.length) return;

    let redVal = redList[i];
    let blueVal = blueList[i];
    totalSpeed += redVal > blueVal ? redVal : blueVal;

    helper(redList, blueList, i + 1);
  }

  helper(redShirtSpeeds, blueShirtSpeeds, 0);

  return totalSpeed;
}

// Time : O(nlogn) -- sorting two lists makes 2*nlogn complexity
// Space : O(n) -- we are sorting in place, mutating the original arrays so that uses no extra space, but on the call stack
// we will build up to "n" number of function calls as we sum up total speed, touching every single pair

// Do not edit the line below.
exports.tandemBicycle = tandemBicycle;
