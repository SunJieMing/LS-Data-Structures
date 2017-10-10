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
    const newNode = {
      value,
      next: null,
    };

    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }

  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    const removed = this.head.value;
    this.head = this.head.next;
    return removed;
  }
  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
    let node = this.head;
    while (node) {
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }
    return false;
  }
}


const newList = new LinkedList();
newList.addToTail(1);
newList.addToTail(2);
newList.addToTail(3);
console.log(newList.head);
console.log(newList.tail);
console.log(newList.length);

module.exports = LinkedList;
