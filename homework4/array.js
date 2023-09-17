const ArrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 2; i < myArray.length; i += 3) {
    console.log(myArray[i]);
  }
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
  let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob'];
let result = [];

for (let i = 0; i < names.length; i++) {
  if (names[i] !== 'Bob') {
    result.push(names[i]);
  }
}

console.log(result);

function numberPower(number, power) {
    if (power === 0) {
      return 1; 
    } else if (power < 0) {
      return "Power must be a non-negative integer.";
    } else {
      let result = 1;
      for (let i = 0; i < power; i++) {
        result *= number;
      }
      return result;
    }
  }
  const baseNumber = 5;
  const exponent = 3;
  const result = numberPower(baseNumber, exponent);
  console.log(result); 
  function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
      let output = '';
  
      if (i % 3 === 0) {
        output += 'Fizz';
      }
  
      if (i % 5 === 0) {
        output += 'Buzz';
      }
  
      console.log(output || i);
    }
  }
  fizzBuzz();

  unction factorialCalculator(number) {
    if (number < 0) {
      return "Factorial is not defined for negative numbers.";
    } else if (number === 0 || number === 1) {
      return 1;
    } else {
      let factorial = 1;
      for (let i = 2; i <= number; i++) {
        factorial *= i;
      }
      return factorial;
    }
  }
  const number = 5;

  const factorialResult = factorialCalculator(number);

  function capitalizeFirstLetter(str) {
    if (str.length === 0) {
      return str; 
    }
  
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  const inputString = 'javascript';
  const capitalizedString = capitalizeFirstLetter(inputString);
  console.log(capitalizedString);

  function blankStringChecker(testString) {
    if (testString === '') {
      return 'This string is blank.';
    } else {
      return 'This string is not blank.';
    }
  }
 
  const emptyString = '';
  const nonEmptyString = 'Hello, World!';
  
  console.log(blankStringChecker(emptyString));
  console.log(blankStringChecker(nonEmptyString));