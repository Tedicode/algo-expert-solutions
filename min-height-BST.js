function minHeightBst(array, isRoot = true, root = null) {
  // Write your code here.

  // take in the array
  // find the midpoint
  // that's the node's value
  // slice array from zero to the midpoint - thats the left array
  // slice array from midpoint to the end - thats the right array
  // recurse on left and right, using these arrays,
  // to insert each value
  // using this order ensures minimum height bst

  if (array.length === 0) return;

  // IF GETTING ERROR, THEN MAY BE OFF BY ONE ERROR? SO MAYBE midpoint be array.length/2 - 1
  let midpoint =
    array.length % 2 ? Math.floor(array.length / 2) : array.length / 2 - 1;
  let value = array[midpoint];
  if (isRoot) root = new BST(value);
  else root.insert(value);

  let leftArr = array.slice(0, midpoint);
  let rightArr = array.slice(midpoint + 1);

  minHeightBst(leftArr, false, root);
  minHeightBst(rightArr, false, root);

  // each function call returns the root
  return root;
}

// Time : O(nlogn) avg case - where n is array length
// because we recurse, creating as many calls as we have elements in in array (n)
// and at each visit we are performing the .insert operation,
// and .insert is a BST Class method with a time complexity itself of O(n)
// in the worst case and O(logn) in average case
// - but we are ensuring an average case by using .insert from the beginning
// (to create MINiMUM HEIGHT BST)
// --- so overall complexity is n * log n -->  O(nlogn)
// and NOT  O(n^2)

// Space: O(n) - where n is the length of the input array
// we will use up frames on the call stack with each recursive call
// with each recursive call, we are processing half as many elements
// so we will have 'log n' calls on the stack at most at one time...
// BUT we are creating and storing a BST of n nodes,
// --> so complexity becomes O(n)

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

// Do not edit the line below.
exports.minHeightBst = minHeightBst;
