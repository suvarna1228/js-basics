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
    print(){
      if(this.isEmpty()){
        console.log('List is Empty')
      }  
      else{
        let curr = this.head;
        let listValues = '';
        while(curr){
            listValues +=`${curr.value}`;
            curr = curr.next; 
        }
        console.log(listValues);
      }
    }
}

const list = new LinkedList();
console.log('List is Empty?', list.isEmpty());
console.log('List size:', list.getSize());
list.print();
list.preappend(40);
list.print();
console.log('List is Empty?', list.isEmpty());
console.log('List size:', list.getSize());
list.print();