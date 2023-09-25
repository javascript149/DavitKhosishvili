function findLongestWord(wordArray) {
    let longestWord = "";
    
    for (const word of wordArray) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    
    return longestWord;
  }
  const words = ["carrot", "horse", "dog", "hippopotamus"];
  const longest = findLongestWord(words);
  
  console.log("Longest word:", longest);

  const calculator = {
    num1: 0,
    num2: 0,
  
    
    setValues: function (value1, value2) {
      this.num1 = value1;
      this.num2 = value2;
    },
   
    add: function () {
      return this.num1 + this.num2;
    },
    subtract: function () {
      return this.num1 - this.num2;
    }, 
    multiply: function () {
      return this.num1 * this.num2;
    },
  
    divide: function () {
      if (this.num2 === 0) {
        return "Division by zero is not allowed.";
      }
      return this.num1 / this.num2;
    },
  };
  calculator.setValues(10, 5);
  
  console.log("Addition:", calculator.add());
  console.log("Subtraction:", calculator.subtract());
  console.log("Multiplication:", calculator.multiply());
  console.log("Division:", calculator.divide());

 
hoisting();


function hoisting() {
  console.log("Function is hoisted and can be called before its declaration.");
}