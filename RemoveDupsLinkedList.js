// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.

  // traverse the linked list, comparing the current node.value to node.next.value
  // if the values are equal, we want to remove the next one, and place the node.next.next node
  // instead as the node.next of the current node
  let currentNode = linkedList;

  while (currentNode.next !== null) {
    if (currentNode.value === currentNode.next.value) {
      if (currentNode.next.next === null) currentNode.next = null;
      else currentNode.next = currentNode.next.next;
    }

    if (currentNode.next) {
      if (currentNode.next.value !== currentNode.value) {
        currentNode = currentNode.next;
      } else {
        currentNode.next = currentNode.next.next;
      }
    }
  }

  return linkedList;

  // return null;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
