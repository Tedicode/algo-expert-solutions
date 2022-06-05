// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.

  // Optimized Approach:
  // traverse the linked list, comparing the current node's value to the next node's value

  // instead of reassigning the node's 'next' property (to the it's next.next) each time we encounter a duplicate,
  // since that next assignment could also be a duplicate,
  // we will start off by storing the next node in a variable that is a placeholder which will be replaced continually with the next node
  // until we arrive at a node that IS distinct from the current node, and only then will we reassign the currentNode's 'next' property to that node

  // the outer while loop will hold constant the 'current node' at the time
  // the inner while loop will handle the placeholder for the current node's 'next' property, traversing
  // and comparing all of the subsequent nodes (with the value of the current node of the outer loop)

  let currentNode = linkedList;
  while (currentNode !== null) {
    let nextPlaceHolder = currentNode.next;
    while (
      nextPlaceHolder !== null &&
      nextPlaceHolder.value === currentNode.value
    ) {
      nextPlaceHolder = nextPlaceHolder.next;
    }
    currentNode.next = nextPlaceHolder;
    currentNode = nextPlaceHolder;
  }

  return linkedList;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
