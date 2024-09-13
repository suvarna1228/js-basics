function insertionsort(a){
   for(let i=1;i<a.length;i++) {
    let nti=a[i];
    let j=i-1;
    while(j>=0&&a[j]>nti){
        a[j+1]=a[j];
        j=j-1;
    }
    a[j+1]=nti;
   }
}
const a=[8,28,-2,4,-6];
insertionsort(a);
console.log(a);