class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    preappend(value) {
        const node = new Node(value); // Corrected reference to Node
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
}

const list = new LinkedList();
console.log('List is Empty?', list.isEmpty());
console.log('List size:', list.getSize());
list.preappend(40);
console.log('List is Empty?', list.isEmpty());
console.log('List size:', list.getSize());
