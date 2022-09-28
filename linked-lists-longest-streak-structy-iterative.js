// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const longestStreak = (head) => {
  // todo

  // iterative solution:
  // traverse the linkedlist, classic
  // track the incumbent val
  // track the count of iterations with that incumbent value
  // compare the current val to the incumbent val
  //

  let current = head;
  let incVal = null;
  let count = 0;
  let highestStreak = 0;

  while (current !== null) {
    if (current.val !== incVal) count = 1;
    else count++;

    if (count > highestStreak) highestStreak = count;
    incVal = current.val;
    current = current.next;
  }

  return highestStreak;
};

module.exports = {
  longestStreak,
};
