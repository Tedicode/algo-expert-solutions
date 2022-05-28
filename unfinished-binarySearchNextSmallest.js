// Prompt:
// (https://medium.com/codex/my-google-coding-interview-question-166f2922b548)

// Given a positive sorted array a = [ 3, 4, 6, 9, 10, 12, 14, 15, 17, 19, 21 ];
// Define a function f(a, x) that returns x, the next smallest number, or -1 for errors.
// i.e.
// f(a, 12) = 12
// f(a, 13) = 12

// _______________________________________________________________

// my solution with the following test fails for targets of 8, out of bounds left/right, and exact right bound

console.log(search([1, 4, 5, 7, 9, 11, 15, 16, 19, 22], 17));

// implement binary search
// except we are not only searching for that exact number :
// the number is not found, we want to return the next smallest number in the array
// and for errors, return -1

// binary search : split sorted array in half, finding the midpoint and comparing the 'target'
// if the target is greater than this midpoint, eliminate first half of the array
// if the target is smaller than this midpoint, eliminate second half of the array
// because we are not interested in any smaller values, since we are looking strictly for the target
// and if the target is equal to the value at the midpoint, then return that value
// but in our case, a smaller value will suffice, if the target itself is not found (return next smallest val)
function search(arr, number) {
  let incumbent = -1;

  function helper(array, num) {
    let midIndex = Math.floor((array.length - 1) / 2);

    if (midIndex > array.length - 1) {
      return;
    }
    if (array[midIndex] === num) {
      incumbent = array[midIndex];
      return;
    } else if (array[midIndex] > num) {
      helper(array.splice(0, midIndex), num);
    } else {
      incumbent = array[midIndex];
      if (midIndex < 1) return;
      helper(array.splice(midIndex + 1), num);
    }
  }

  helper(arr, number);
  return incumbent;
}
