import LinkedList from "./exercise1";
import Stack from "./exercise2";
import Queue from "./exercise3";
import DoublyLinkedList from "./exercise4";

// Exercicio 1
const list = new LinkedList();
list.add("oi");
list.add("tudo");
list.add("bem");
list.add("com voce?");

list.print();

// Exercicio 2
const stack = new Stack();

stack.push("oi");
stack.push("tudo");
stack.push("bem");

stack.print();

console.log(stack.isEmpty());

stack.pop();
stack.print();

//Exercicio 3
const queue = new Queue();

queue.enqueue("oi");
queue.enqueue("tudo");
queue.enqueue("bem");

queue.print();
console.log(queue.isEmpty());

queue.dequeue();
queue.print();

// Exercicio 4
const dlist = new DoublyLinkedList();

dlist.add(10);
dlist.add(20);
dlist.add(30);

dlist.print();

dlist.remove(20);
dlist.print();

console.log(dlist.find(10));
