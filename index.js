const obj ={
    name:'nethul',
    age:22,
    'key-three':true,
    saymyname:function(){
        console.log(this.neame)
    }
}
obj.hobby ='football'
delete obj.hobby
console.log(obj.name);
console.log(obj['age']);
console.log(obj['key-three']);
console.log(obj);
obj.saymyname()
