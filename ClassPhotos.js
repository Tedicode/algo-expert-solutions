function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.

  // Evaluate whether or not we either have: for each red shirt, one blue shirt shorter than them
  // OR : for each blue shirt, one red shirt shorter than them

  // edge cases? :
  // no negatives or decimals
  // each class has at least 2 students - so, at least both arrays will have one student

  // approach:
  // sort both arrays
  // then compare, starting at the higher end?
  // compare to see which array's value is greater, and THEN continue comparing for that same condition:
  // i.e. "if red's first value is greater than blue's first value, then we'll compare the rest of the
  // corresponding values, and if every other red value is greater than blue, return true. else return false"

  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);

  if (redShirtHeights[0] > blueShirtHeights[0]) {
    for (let i = 0; i < redShirtHeights.length; i++) {
      if (blueShirtHeights[i] >= redShirtHeights[i]) return false;
    }
  } else if (blueShirtHeights[0] > redShirtHeights[0]) {
    for (let i = 0; i < redShirtHeights.length; i++) {
      if (redShirtHeights[i] >= blueShirtHeights[i]) return false;
    }
  } else return false;

  return true;
}

// Time: O(nlogn)- because we need to sort both arrays before we operate on them
// Space: O(1) - because we don't need to use any extra space,
// we are sorting the array in place and iterating through it to compare elements

// Do not edit the line below.
exports.classPhotos = classPhotos;
