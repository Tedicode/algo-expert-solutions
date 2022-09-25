// recursive approach:

// Time: O(n+m) with n as # of nodes in LL1 and m is # nodes in LL2
// Space: O(n+m) - in worse case scenario (LL1 length == LL2 length),
// we'll have as many iterations as we have total nodes in LL1 + LL2

if (head1 === null && head2 === null) return null;
if (head1 === null) return head2;
if (head2 === null) return head1;

let smaller = head1.val < head2.val ? head1 : head2;
let larger = smaller === head1 ? head2 : head1;

smaller.next = mergeLists(smaller.next, larger);
return smaller;
// then return smaller
