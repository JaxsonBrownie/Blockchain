class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // METHOD: Add a new node to the list with the given data
    append(data) {
        // create a new node
        const node = new Node(data, null);

        // set up reference values
        if (this.size == 0) {   // empty list case
            this.head = node;
        } else {
            let currentNode = this.head;
            while (currentNode.next != null) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        
        this.size ++;
    }
}

const linkedList = new LinkedList();
linkedList.append("Hello World");
linkedList.append(123);
console.log(linkedList.head.data);