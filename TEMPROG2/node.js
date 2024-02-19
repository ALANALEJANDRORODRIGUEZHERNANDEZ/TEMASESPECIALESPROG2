class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
const one = new Node(5);
const two = new Node(7);
const three = new Node(42);

one.next = two;
two.next = three;

/** 
*
*  @param {Node} The head node of the list
*  @returns The outpout  a String
*/
function printList(head) {
    let aux = head;
    let str = '';   
  
    str = aux.value + ' -> ';
  
    while (aux.next !== null) {
      aux = aux.next;
      str = str + aux.value + ' -> ';
    }
    return str
  }
/** 
*
*  @param {Node} head The head node of the list
*  @returns The outpout  a String
*/
function addAfter(head,target,value){
    aux = head;
    while(aux.next !== null){
        if(aux.value === target){
            const newnode = new Node(value)
            newnode.next = aux.next;
            aux.next = newnode;   
        }
        aux = aux.next;
    }
}
printList(one);
addAfter(one,7,13);
printList(one);
// Var || Let || Const
//Nunca se usa, se puede hacer global|| si se reasigna     ||no se reasigna