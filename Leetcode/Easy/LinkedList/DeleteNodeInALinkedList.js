// Note: The actual solution does not assume the existence of head.

class Node {
    constructor(element) {
      this.element = element;
      this.next = null;
    }
}

class LinkedList {
    constructor() {
      this.head = null;
    }

    add(element) {
        const node = new Node(element);
        node.next = this.head;
        this.head = node;
    }

    delete(element) {
        var currentNode = this.head;
        var previousNode;
        if (currentNode.element === element){
            this.head = currentNode.next;
        } 
        else {
            while(currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
    
            previousNode.next = currentNode.next;
        }
    }
}

var arr = [4, 5, 1, 9];
var l1 = new LinkedList();

for (var i = 0; i < arr.length; ++i) {
    l1.add(arr[i]);
}

l1.delete(5)

console.log(l1);