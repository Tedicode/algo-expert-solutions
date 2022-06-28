/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // traverse the linked list, adding all each value's node to a string

  let str = "";

  let current = head;
  while (current) {
    str += current.val;
    current = current.next;
  }

  // then test that string as a palindrome

  return str === [...str].reverse().join("");
};
