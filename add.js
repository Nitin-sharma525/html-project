function calculate() {
      const num1 = parseFloat(document.getElementById("Number").value);
      const num2 = parseFloat(document.getElementById("Number2").value);
      const operator = document.getElementById("Operators").value;
      let result;
 
      if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers.";
      } else {
        switch (operator) {
          case "+":
            result = num1 + num2;
            break;
          case "-":
            result = num1 - num2;
            break;
          case "*":
            result = num1 * num2;
            break;
          case "/":
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            break;
          default:
            result = "Invalid operator";
        }
      }
 
      document.getElementById("Result").textContent = "Result: " + result;
    }


//drop down list

function calculate() {
      const num1 = parseFloat(document.getElementById("Number").value);
      const num2 = parseFloat(document.getElementById("Number2").value);
      const operator = document.getElementById("Operators").value;
      let result;
 
      if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers.";
      } else {
        switch (operator) {
          case "+":
            result = num1 + num2;
            break;
          case "-":
            result = num1 - num2;
            break;
          case "*":
            result = num1 * num2;
            break;
          case "/":
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            break;
          default:
            result = "Invalid operator";
        }
      }
 
      document.getElementById("Result").textContent = "Result: " + result;
    }