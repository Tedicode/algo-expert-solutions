function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.

  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);
  if (redShirtHeights[0] === blueShirtHeights[0]) return false;
  let larger = redShirtHeights[0] > blueShirtHeights[0] ? "red" : "blue";

  function helper(blueArr, redArr, n, greater) {
    if (n === blueArr.length) return true;
    if (greater === "red") {
      if (blueArr[n] > redArr[n]) return false;
      return true && helper(blueArr, redArr, n + 1, greater);
    } else {
      if (redArr[n] > blueArr[n]) return false;
      return true && helper(blueArr, redArr, n + 1, greater);
    }
  }

  return helper(blueShirtHeights, redShirtHeights, 1, larger);
}

// Time: O(nlogn)- because we need to sort both arrays before we operate on them
// Space: O(N) - will create a new frame on the call stack for each input, n

// Do not edit the line below.
exports.classPhotos = classPhotos;
