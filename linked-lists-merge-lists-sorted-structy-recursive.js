// recursive approach:

if (head1 === null && head2 === null) return null;
if (head1 === null) return head2;
if (head2 === null) return head1;

let smaller = head1.val < head2.val ? head1 : head2;
let larger = smaller === head1 ? head2 : head1;

smaller.next = mergeLists(smaller.next, larger);
return smaller;
// then return smaller
