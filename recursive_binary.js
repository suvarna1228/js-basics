function recursive_binary(a,t){
    a.sort((x,y)=>x-y);
    return search(a,t,0,a.length -1);

}
function search(a,t,left,right){
    if(left>right){
        return -1;
    }
    let middle=Math.floor((left+right)/2)
    if (t===a[middle]){
      return middle ; 
    }
    if (t<a[middle]){
       return search(a,t,left,middle-1);
    }else{
        return search(a,t,middle+1,right);
    }
}
console.log(recursive_binary([-5,2,10,4,6],10));
console.log(recursive_binary([-5,2,10,4,6],6));
console.log(recursive_binary([-5,2,10,4,6],20));