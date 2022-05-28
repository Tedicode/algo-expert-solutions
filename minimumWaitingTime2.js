function minimumWaitingTime(queries) {
  // Write your code here.

  // sort the input array in ascending order so the query with the longest duration is executed last
  queries.sort((a, b) => a - b);

  // initialize sum waiting time to zero
  let sumWaitTime = 0;

  // iterate through the sorted queries array, at each value adding that (duration time) for the number of
  // values (queries) that follow it
  // remember to add 1 when determining, from array length and current index, how many more values follow

  for (let i = 0; i < queries.length; i++) {
    sumWaitTime += queries[i] * (queries.length - (i + 1));
  }

  return sumWaitTime;
}

// Time complexity: O(nlogn)
// we'll operate on each input in the array, with a constant number of operations
// but first, we will sort the array, and any sort method we use will at best be in nlogn time

// Space complexity: O(1)
// Constant space complexity because we'll store only one variable no matter what (to hold the sum).
// We do not use any additional space, as we are sorting the original input array *in place*

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;
