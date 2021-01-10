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

    reverse() {
        var prevNode = null;
        var currNode = this.head;
        var nextNode = null;

        while (currNode !== null) {
            nextNode = currNode.next;
            currNode.next = prevNode;
            prevNode = currNode;
            currNode = nextNode;
        }
        return prevNode;
    }
}

var arr = [4, 5, 1, 9];
var l1 = new LinkedList();

for (var i = 0; i < arr.length; ++i) {
    l1.add(arr[i]);
}

l1.reverse()

console.log(l1);