// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const longestStreak = (head) => {
  // todo
  if (head === null) return 0;

  // similar to isUniValue problem
  // except this will track the length of the streak
  // and traverse the entire LL no matter what...
  // instead of short-circuiting and returning false

  function helperRecurse(head, currVal, highestStreak, currentStreak) {
    if (head === null) return highestStreak;
    if (head.val !== currVal) {
      currVal = head.val;
      currentStreak = 1;
    } else {
      currentStreak++;
      if (currentStreak > highestStreak) highestStreak = currentStreak;
    }
    highestStreak = Math.max(
      highestStreak,
      helperRecurse(head.next, currVal, highestStreak, currentStreak)
    );
    return highestStreak;
  }

  return helperRecurse(head, head.val, 0, 0);
};

module.exports = {
  longestStreak,
};
