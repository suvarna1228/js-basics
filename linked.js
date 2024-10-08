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
    append(value) {
      const node = new Node(value);
      if(this.isEmpty() ){
        this.head = node;
      }else {
        let prev = this.head;
        while(prev.next){
          prev = prev.next;  
        }
        prev.next = node;
      }  
      this.size++ 
    }
    insert(value,index){
      if(index<0 || index>this.size){
        return;
      }
      if(index === 0){
        this.preappend(value)
      }else{
        const node = new Node(value);
        let prev = this.head;
        for(let i=0; i<index-1;i++){
          prev = prev.next
        }
        node.next = prev.next;
        prev.next = node;
        this.size++;
      }
      
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
console.log()
list.preappend(140);
list.print();
list.append(60);
list.append(70);
// console.log('List is Empty?', list.isEmpty());
// console.log('List size:', list.getSize());
list.print();
list.insert(10,0);
list.print();