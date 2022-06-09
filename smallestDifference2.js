function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.

  // Time: O(nlogn) - where n is the total number of elements from both input arrays
  // we must touch on each value n, creating an object for every value n.  (O(n) complexity)
  // we avoid the nested for loop by using one mega array to iterate through (O(n))
  // but before iterating, we sort this mega array, which creates nlogn complexity

  // Space: O(n) - where n is the total number of elements from both input arrays
  // we create an extra array with one object for every original input value

  // Approach:
  // for each value in both arrays, create an object to hold 2 data points for each element:
  // 1. its value.      --- value: (integer)
  // 2. its origin (1,2)    --- origin: (1 or 2)
  // and place all of these objects in ONE array
  // sort this one mega array in ascending order of their first property (their value)
  // iterate through this mega array, calculating the distances from one to the next
  // and comparing that distance with the current smallest difference,
  // replacing the smallestDiff and closestPair accordingly

  // also, before considering any 2 consecutive objects, check if they have same origin
  // b/c we won't pair any two values from the same array ...
  // IF array[i+1].origin === array[i].origin THEN continue

  // before returning the pair array, make sure the pair is in the right order (orgin1, origin2)
  // closestPair.sort((a,b)=> a.origin - b.origin)
  // and only return their values, not their whole objects

  let megaArray = [];
  arrayOne.forEach((val) => megaArray.push({ value: val, origin: 1 }));
  arrayTwo.forEach((val) => megaArray.push({ value: val, origin: 2 }));

  megaArray.sort((a, b) => a.value - b.value);

  let smallestDiff = Infinity;
  let closestPair = [];

  for (let i = 0; i < megaArray.length - 1; i++) {
    let first = megaArray[i];
    let second = megaArray[i + 1];
    if (first.origin === second.origin) continue;
    let currentDiff = Math.abs(first.value - second.value);
    if (currentDiff < smallestDiff) {
      smallestDiff = currentDiff;
      closestPair = [first, second];
    }
  }

  let [fromArrayOne, fromArrayTwo] = closestPair.sort(
    (a, b) => a.origin - b.origin
  );
  return [fromArrayOne.value, fromArrayTwo.value];
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
