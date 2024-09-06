function prime(n){
    if (n<2){
        return false
    }
    for (let i=2;i<n;i++){
        if(n%2==0){
            return false
        }
    }return true
}
console.log(prime(1))
console.log(prime(3))
console.log(prime(4))