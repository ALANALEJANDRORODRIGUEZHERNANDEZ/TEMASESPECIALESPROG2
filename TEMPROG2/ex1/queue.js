const LinkedList = require('./list');
const Node = require('./node');

/*class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
/*
class Queue extends LinkedList{

}
*/
const one = new Node(5);
const lista = new LinkedList (one);

lista.toString();
