function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Write your code here.

  // if third parameter fastest === true, we want to optimize the pairs,
  // by pairing fastests riders with slowest riders :
  // sort one list in ascending order and the other list in descending order
  // and sum up the greater values of each pair

  // if parameter fastest === false, we want to do the opposite:
  // by pairing the fastest riders together
  // sort both lists in ascending order
  // and sum up the greater value of each pair

  redShirtSpeeds.sort((a, b) => a - b);
  if (fastest) blueShirtSpeeds.sort((a, b) => b - a);
  else blueShirtSpeeds.sort((a, b) => a - b);

  let totalSpeed = 0;

  for (let i = 0; i < redShirtSpeeds.length; i++) {
    let redVal = redShirtSpeeds[i];
    let blueVal = blueShirtSpeeds[i];

    totalSpeed += redVal > blueVal ? redVal : blueVal;
  }

  return totalSpeed;
}

// Time: O(nlogn) -
// we are sorting both input arrays before operating on them. (2* nlogn). then we execute a for loop,
// iterating over n values, and the body of the for loop itselff is running constant time operations. (n)
// Overall, 2nlogn + n, which becomes O(nlogn)

// Space: O(1) -
// we are sorting our arrays in place so we are not using any extra space for that, and then we just use one variable to store
// the totalSpeed, no matter how large our input arrays are.

// Do not edit the line below.
exports.tandemBicycle = tandemBicycle;
