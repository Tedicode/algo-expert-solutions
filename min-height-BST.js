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
