// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array) {
  // Write your code here.

  // create a variable to keep track of the depth
  // create a variable to store the sum

  // iterate through the array, checking whether each value is an integer or an array (.isArray())
  // if it is an array, recurse and pass through the depth
  // if it is a value, add it to the sum (the sum of that scope)

  // base case: when we've processed the whole array of the current frame
  // so original array is on the first function call, and when that one reaches its end, we'll have the whole special sum
  // to wrap up any one call, when we've reached last index in an array,
  // we will take THAT scope's sum and return it to the previous call, which is adding up its own scope sum
  // and when the stacked call returns its sum to the previous call, it will be multiplied THERE by its depth
  // scopeSum += depth * helper(depth, nextArr)
  // and inside any one function call (where an array is being iterated through),
  // we'll first initialize a scopeSum, and then a loop to iterate through the array
  // while(array.length), check if a value is an array
  // if it is, add to the scopeSum the depth * a recursive call for THAT array  - then dispose the value (so the while loop can end)
  // else, increment the scopeSum with that integer. - then dispose the value
  // scopeSum += currentVal

  function helperRecurse(arr, depth) {
    let scopeSum = 0;
    depth++;
    while (arr.length) {
      let value = arr.shift();
      if (Array.isArray(value)) {
        scopeSum += depth * helperRecurse(value, depth);
      } else {
        scopeSum += value;
      }
    }

    return scopeSum;
  }

  return helperRecurse(array, 1);
}

// Time: O(N)
// we must operate on each input n, to evaluate and add their values, but such operations are constant time operations

// Space: O(N)
// - in the worst case scenario, where each input n is itself an array, we will need to recurse, meaning
// we'll take up another frame on the call stack for each input

// Do not edit the line below.
exports.productSum = productSum;
