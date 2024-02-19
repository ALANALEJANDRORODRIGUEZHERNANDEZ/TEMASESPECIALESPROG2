class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const one = new Node(5);
const two = new Node(3);
const three = new Node(7);
const four = new Node(42);

one.next = two;
two.next = three;
three.next = four;

/**
 * printList
 *
 * @param {Node} head The head node of the list
 * @returns {string} The result string
 */
function printList(head) {
  let aux = head;
  let str = "";

  str = aux.value + " -> ";

  while (aux.next !== null) {
    aux = aux.next;
    str = str + aux.value + " -> ";
  }
  return str;
}

/**
 * addAfter
 *
 * @param {Node} head
 * @param {number} target
 * @param {number} value
 */
function addAfter(head, target, value) {
  let aux = head;
  while (aux.next) {
    if (aux.value === target) {
      const newNode = new Node(value);
      newNode.next = aux.next;
      aux.next = newNode;
    }
    aux = aux.next;
  }
}
/** addBefore
 * @param {Node} head
 * @param {number} target
 * @param {number} value
 */
function addBefore(head, target, value) {
  let nodeCurrent = head;
  while (nodeCurrent.next !== null) {
    if (nodeCurrent.next.value === target) {
      const newNode = new Node(value);
      newNode.next = nodeCurrent.next;
      nodeCurrent.next = newNode;
      break;
    }
    nodeCurrent = nodeCurrent.next;
  }
}
/** deleteBefore
 * @param {Node} head
 * @param {number} target
 */
function deleteBefore(head, target) {
  let nodeCurrent = head;
  for (; nodeCurrent.next !== null && nodeCurrent.next.next !== null;) {
    if (nodeCurrent.next.next.value === target) {
      nodeCurrent.next = nodeCurrent.next.next;
    }
    nodeCurrent = nodeCurrent.next;
  }
}
/** deleteAfter
 * @param {Node} head
 * @param {number} target
 */
function deleteAfter(head, target) {
  let nodeCurrent = head;
  for (; nodeCurrent.next !== null && nodeCurrent.next.next !== null;) {
    if (nodeCurrent.value === target) {
      nodeCurrent.next = nodeCurrent.next.next;
    }
    nodeCurrent = nodeCurrent.next;
  }
}
/*
// 5 -> 3 -> 7 -> 42 ->
console.log(printList(one));
console.log("Ananiendo un 13 despues del 7");
addAfter(one, 7, 13);
console.log(printList(one));
console.log("Ananiendo un 89 antes del 3");
addBefore(one, 3, 89);
console.log(printList(one));
console.log("Ananiendo un 0 antes del 89");
addBefore(one, 89, 0);
console.log(printList(one));
console.log("Eliminando antes del 7");
deleteBefore(one, 7);
console.log(printList(one));
console.log("Eliminando despues del 89");
deleteAfter(one, 89);
console.log(printList(one));
console.log("Eliminando antes del 42");
deleteBefore(one, 42);
console.log(printList(one));
*/
module.exports = Node;
