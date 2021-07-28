export default class Queue {
  constructor(
    private front: ListNode | null = null,
    private back: ListNode | null = null
  ) {}

  enqueue(item: any): void {
    let node = new ListNode(item);
    if (this.front === null) {
      this.front = node;
    } else {
      this.back.next = node;
    }
    this.back = node;
  }

  dequeue(): any {
    if (this.front === null) {
      throw new Error("Queue is empty");
    }
    let item = this.front.data;
    this.front = this.front.next;
    if (this.front === null) {
      this.back = null;
    }
    return item;
  }

  print(): void {
    let current = this.front;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }

  isEmpty(): boolean {
    return this.front === null;
  }
}

class ListNode {
  constructor(public data: any, public next: ListNode | null = null) {}
}
