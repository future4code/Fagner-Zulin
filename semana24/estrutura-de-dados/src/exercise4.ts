// a Doubly Linked List class

class DLNode {
  constructor(
    public data: number,
    public next: DLNode | null,
    public prev: DLNode | null
  ) {}
}

export default class DoublyLinkedList {
  constructor(
    public head: DLNode | null = null,
    public tail: DLNode | null = null
  ) {}

  public add(data: number): void {
    const newNode = new DLNode(data, null, null);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  public remove(data: number): void {
    let curNode = this.head;

    while (curNode !== null) {
      if (curNode.data === data) {
        if (curNode.prev === null) {
          this.head = curNode.next;
          if (this.head !== null) {
            this.head.prev = null;
          }
        } else {
          curNode.prev.next = curNode.next;
          if (curNode.next !== null) {
            curNode.next.prev = curNode.prev;
          }
        }
        break;
      }
      curNode = curNode.next;
    }
  }

  public print(): void {
    let curNode = this.head;

    while (curNode !== null) {
      console.log(curNode.data);
      curNode = curNode.next;
    }
  }

  public find(data: number): DLNode | null {
    let curNode = this.head;

    while (curNode !== null) {
      if (curNode.data === data) {
        return curNode;
      }
      curNode = curNode.next;
    }
    return null;
  }
}
