/*
23. Merge k Sorted Lists - Hard
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

Example 1:
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6

Example 2:
Input: lists = []
Output: []

Example 3:
Input: lists = [[]]
Output: []
*/

export interface IListNode {
  val: number;
  next: IListNode | null;
}

export function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
export const mergeKLists = (lists) => {
  if (lists.length === 0 || !lists) {
    return null;
  }

  const mergeTwoLists = (listOne, listTwo): IListNode => {
    const dummy = new ListNode(0, null);
    let tail = dummy;
    while (listOne && listTwo) {
      if (listOne.val < listTwo.val) {
        tail.next = listOne;
        listOne = listOne.next;
      } else {
        tail.next = listTwo;
        listTwo = listTwo.next;
      }
      tail = tail.next;
    }
    if (listOne) {
      tail.next = listOne;
    }
    if (listTwo) {
      tail.next = listTwo;
    }
    return dummy.next;
  };

  while (lists.length > 1) {
    const mergedList: IListNode[] = [];
    for (let i = 0; i < lists.length; i += 2) {
      const l1 = lists[i];
      const l2 = i + 1 < lists.length ? lists[i + 1] : null;
      mergedList.push(mergeTwoLists(l1, l2));
    }
    lists = mergedList;
  }

  return lists[0];
};
