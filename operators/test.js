function multiplos3e5(num){
    let sum = 0
  
    for(let i = 1; i < num; i++){
      if(i % 3 === 0){
        sum += i
      }else if(i % 5 === 0){
        sum += i
      }
    }
  
   console.log(sum);
  }
  
  multiplos3e5(75)
  
  
