class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
    this.tail = head;
    this.size = 1;
  }
  /**
   * sizeList
   * 
   * @returns {number} size
   */
  sizeList() {
    return this.size;
  }
  /**
   * addStart
   * 
   * @param {number} value 
   */

  addStart(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size += 1;
  }
  /**
   * addStart
   * 
   * @param {number} value 
   */
  addEnd (value){
      const newNode = new Node(value);
      this.tail.next = newNode;
      this.tail = newNode;
      this.size += 1;
  }
  /**
   * addAfter
   * @param {number} target 
   * @param {number} value 
   */
  addAfter(target,value){
    let node = this.head;
    for(;node.next !== null ;){
      if(node.value === target){
        const newNode = new Node(value);
        newNode.next = node.next;
        node.next = newNode;  
        this.size++;
      }
      node = node.next;
    }
  }
  /**
   * AddBefore
   * @param {number} target 
   * @param {number} value 
   */
  addBefore (target, value){
    let node = this.head;
    for(;(node.next !== null && node.next.next !== null);){
      if(node.next.value === target){
        const newNode = new Node(value);
        newNode.next = node.next;
        node.next = newNode;  
        this.size++;
        break;
      }
      node = node.next;
    }
  }
  /**
   * deleteBefore
   * @param {number} target 
   */
  deleteBefore (target){
    let node = this.head;
    for(; (node.next !== null && node.next.next !== null) ;){
      if(node.next.next.value === target){
        node.next = node.next.next;
        this.size--;
        break;
      }
      node = node.next;
    }
  }
  /**
   * deleteAfter
   * @param {number} target 
   */
  deleteAfter (target){
    let node = this.head;
    for(; (node !== null && node.next !== null)  ;){
      if(node.value === target && node.next !== null){
        node.next = node.next.next;
        this.size--;
        break;
      }
      node = node.next;
    }
  }
  /**
   * 
   */
  toString() {
    let str = ''
    let aux = this.head;

    str = aux.value + ' -> ';

    while (aux.next !== null) {
      aux = aux.next;
      str = str + aux.value + ' -> ';
    }
    console.log(str);
  }
}

const one = new Node(2);
const list = new LinkedList(one);

list.addEnd(4);
list.addStart(1);
list.addAfter(2, 3);
list.addBefore(4, 3);

console.log("Lista original:");
list.toString();

list.addStart(0);
console.log("\nLista después de agregar al inicio:");
list.toString();

list.deleteBefore(2);
console.log("\nLista después de eliminar antes de 2:");
list.toString();

list.deleteAfter(2);
console.log("\nLista después de eliminar después de 2:");
list.toString();

list.addAfter(0,1000);
console.log("\nLista después de agregar después de 0:");
list.toString();