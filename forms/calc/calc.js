const calculate = function(num1, num2) {
   sum =  (num1 + num2);
   return sum;
}
  let firstNumber = parseInt(prompt("Enter your first number"));
  let secondNumber = parseInt(prompt("Enter your second number"));


  let summedNumbers = calculate(firstNumber, secondNumber);

console.log(`The sum of ${firstNumber} and ${secondNumber} is ${summedNumbers}`)