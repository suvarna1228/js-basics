class node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class  linked_list {
    constructor() {
      this.head =null;
      this.size =0;  
    }
    isEmpty(){
        return this.size === 0;
    }
    isSize(){
        return this.size
    }
}
const list = new linked_list()
console.log('List is Empty?',list.isEmpty());
console.log('list size', list.isSize());