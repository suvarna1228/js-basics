function bubblesort(a){
 let swapped;
 do{
    swapped =false;
    for (let i=0;i<a.length-1;i++){
      if(a[i]>a[i+1]){
        let temp=a[i];
        a[i]=a[i+1];
        a[i+1]=temp;
        swapped=true;
       }
    }
}while(swapped)
}
const a=[8,28,-2,4,-6];
bubblesort(a);
console.log(a);