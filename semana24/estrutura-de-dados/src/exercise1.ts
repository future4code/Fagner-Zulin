export default class LinkedList {
  constructor(private head: ListNode | null = null) {}

  add(data: any) {
    if (!this.head) {
      this.head = new ListNode(data);
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new ListNode(data);
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current);
      current = current.next;
    }
  }
}

class ListNode {
  constructor(public data: any, public next: ListNode | null = null) {}
}
