function calculate(x, y, operation, callback) {
    const result = operation(x, y);
    callback(result);
  }
  
  // Callback function to handle the result
  function displayResult(result) {
    console.log("Result:", result);
  }
  
  // Example usage: Addition operation
  calculate(5, 3, (a, b) => a + b, displayResult);