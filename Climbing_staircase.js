function  Climbing_Staircase(n){
    const now=[1,2]
    for(let i=2;i<=n;i++){
      now[i] = now[i-1]+now[i-2] 
    }
    return now[n-1]
}
console.log(Climbing_Staircase(1))
console.log(Climbing_Staircase(2))
console.log(Climbing_Staircase(3))
console.log(Climbing_Staircase(4))
console.log(Climbing_Staircase(5))
console.log(Climbing_Staircase(6))