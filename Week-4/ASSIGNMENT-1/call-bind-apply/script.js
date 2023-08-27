class Calculator {
    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }
  
    multiply(a, b) {
      return a * b;
    }
  
    divide(a, b) {
      return a / b;
    }
  }
  
  class ScientificCalculator extends Calculator {
    square(a) {
      return a * a;
    }
  
    cube(a) {
      return a * a * a;
    }
  
    power(a, b) {
      return Math.pow(a, b);
    }
  }
  
  const scientificCalc = new ScientificCalculator();
  
  // Using "call" to invoke "add" method of Calculator class
  const addResult = Calculator.prototype.add.call(scientificCalc, 10, 5);
  console.log("Add Result:", addResult);
  
  // Using "apply" to invoke "subtract" method of Calculator class
  const subtractResult = Calculator.prototype.subtract.apply(scientificCalc, [10, 5]);
  console.log("Subtract Result:", subtractResult);
  
  // Using "bind" to create "multiplyByTwo" method
  const multiplyByTwo = Calculator.prototype.multiply.bind(scientificCalc, 2);
  console.log("Multiply by Two:", multiplyByTwo(5));
  
  // Using "bind" to create "powerOfThree" method
  const powerOfThree = ScientificCalculator.prototype.power.bind(scientificCalc, 3);
  console.log("Power of Three:", powerOfThree(2));
  