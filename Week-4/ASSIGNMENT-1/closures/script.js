function counter() {
    let count = 0; 
  
    function increaseCount(){
        count++;
        return count;
    }
    return increaseCount;
  }
  
  const firstCounter = counter();
  const secondCounter = counter();
  
  const firstValues = [];
  for (let i = 0; i < 5; i++) {
    firstValues.push(firstCounter());
  }
  

  const secondValues = [];
  for (let i = 0; i < 3; i++) {
    secondValues.push(secondCounter());
  }
  

  console.log("firstValues array:", firstValues); // Output: [1, 2, 3, 4, 5]
  console.log("secondValues array:", secondValues); // Output: [1, 2, 3]
  