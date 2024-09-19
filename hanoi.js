function hanoi(n,fromRod,toRod,usingRod){
   if(n==1){
    console.log('Move disk 1 from ${fromRod} to ${toRod}')
    return
   }
   hanoi(n-1,fromRod,usingRod,toRod)
   console.log('move disk ${n} from ${fromRod} to ${toRod}')
   hanoi(n-1,usingRod,toRod,fromRod)

}
hanoi(3,'a','c','b')