/*
284. Peeking Iterator - Medium
Design an iterator that supports the peek operation on an existing iterator in addition to the hasNext and the next operations.

Implement the PeekingIterator class:

PeekingIterator(Iterator<int> nums) Initializes the object with the given integer iterator iterator.
int next() Returns the next element in the array and moves the pointer to the next element.
boolean hasNext() Returns true if there are still elements in the array.
int peek() Returns the next element in the array without moving the pointer.
Note: Each language may have a different implementation of the constructor and Iterator, but they all support the int next() and boolean hasNext() functions.

Example 1:

Input
["PeekingIterator", "next", "peek", "next", "next", "hasNext"]
[[[1, 2, 3]], [], [], [], [], []]
Output
[null, 1, 2, 2, 3, false]

Explanation
PeekingIterator peekingIterator = new PeekingIterator([1, 2, 3]); // [1,2,3]
peekingIterator.next();    // return 1, the pointer moves to the next element [1,2,3].
peekingIterator.peek();    // return 2, the pointer does not move [1,2,3].
peekingIterator.next();    // return 2, the pointer moves to the next element [1,2,3]
peekingIterator.next();    // return 3, the pointer moves to the next element [1,2,3]
peekingIterator.hasNext(); // return False
*/

interface Iterator<T> {
  next(): T;
  hasNext(): boolean;
}

export class ArrayIterator {
  array;
  index;
  constructor(array) {
    this.array = array;
    this.index = 0;
  }

  next() {
    return this.array[this.index++];
  }

  hasNext() {
    return this.index < this.array.length;
  }
}

export class PeekingIterator<T> {
  private iterator: Iterator<T>;
  private nextElement: T | null;

  constructor(iterator: Iterator<T>) {
    this.iterator = iterator;
    this.nextElement = this.iterator.hasNext() ? this.iterator.next() : null;
  }

  // Returns the next element without advancing the iterator
  peek(): T | null {
    return this.nextElement;
  }

  // Returns the next element and advances the iterator
  next(): T | null {
    const current = this.nextElement;
    this.nextElement = this.iterator.hasNext() ? this.iterator.next() : null;
    return current;
  }

  // Returns true if there are still elements in the array
  hasNext(): boolean {
    return this.nextElement !== null;
  }
}
