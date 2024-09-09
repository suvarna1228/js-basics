function linearsearch(a,target){
    for (let i=0;i<a.length;i++){
        if(a[i]==target){
            return i
        }
    }
    return -1
}
console.log(linearsearch([-5,2,10,4,6],10))
console.log(linearsearch([-5,2,10,4,6],6))
console.log(linearsearch([-5,2,10,4,6],20))