// a stack class with a linked list

export default class Stack {
  constructor(private head: ListNode | null = null) {}

  public push(value: any) {
    var node = new ListNode(value);
    if (this.head == null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
  public pop() {
    if (this.head == null) {
      return null;
    } else {
      var value = this.head.data;
      this.head = this.head.next;
      return value;
    }
  }
  public print() {
    var node = this.head;
    while (node !== null) {
      console.log(node.data);
      node = node.next;
    }
  }

  public isEmpty() {
    return this.head == null;
  }
}

class ListNode {
  constructor(public data: any, public next: ListNode | null = null) {}
}
