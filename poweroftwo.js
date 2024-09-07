function poweroftwo(n){
    if(n<1){
        return false
    }
    while(n>1){
        if(n%2!==0){
            return false
        }
        n=n/2
    }
    return true
}
console.log(poweroftwo(1))
console.log(poweroftwo(6))
console.log(poweroftwo(4))