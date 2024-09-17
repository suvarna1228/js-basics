function cartesian_product(a1,a2){
   const result=[]
   for(let i=0;i<a1.length;i++){
      for(let j=0;j<a2.length;j++){
        result.push([a1[i],a2[j]]);
      }
   }
    
   return result;
}
const a1=[1,2];
const a2=[3,4,5];
console.log(cartesian_product(a1,a2));