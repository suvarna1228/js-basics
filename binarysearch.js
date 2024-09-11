function binarysearch(a,t){
    a.sort((x,y)=>x-y)
    let left= 0
    let right =a.length-1
    
    while(left<=right){
        let middle=Math.floor((left+right)/2)
        if (t==a[middle]){
           return middle
        }
        if(t<a[middle]){
            right=middle -1
        }else{
            left=middle +1
        }
    }

    return -1
}

console.log(binarysearch([-5,2,10,4,6],10))
console.log(binarysearch([-5,2,10,4,6],6))
console.log(binarysearch([-5,2,10,4,6],20))