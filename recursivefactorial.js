function recursivefact(n){
    if(n<1){
        return 1
    }return n* recursivefact((n-1))
}
console.log(recursivefact(2))
console.log(recursivefact(1))