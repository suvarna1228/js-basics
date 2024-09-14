function quicksort(a){
  if(a.length<2){
    return a
  }
  let pivot=a[a.length-1]
  let left=[]
  let right=[]
  for(let i=0;i<a.length-1;i++){
    if(a[i]<pivot){
        left.push(a[i])
    }else{
        right.push(a[i])
    }
  }
  return [...quicksort(left),pivot,...quicksort(right)]
}
const a=[8,20,-2,4,-6]
console.log(quicksort(a))