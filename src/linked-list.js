/* eslint-disable class-methods-use-this */
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  // Wraps the given value in a node object and adds the node to the tail of the list
  // If the list is empty, the new element is considered the tail as well as the head
  // If there is one element in the list before the new element is added, the new element becomes the tail of the list
  addToTail(value) {
    const node = {
      value,
      next: null,
    };
    if (this.tail === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }

  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    const removedValue = this.head.value;
    this.head = this.head.next;
    return removedValue;
  }

  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }
}

module.exports = LinkedList;
