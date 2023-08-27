function drawTriangle(triangleSize) {
    for (let i = 1; i <= triangleSize; i++) {
      let asterisks = '';
  
      for (let j = 0; j < i; j++) {
        asterisks += '*';
      }
  
      console.log(asterisks);
    }
  }
  
  drawTriangle(4);