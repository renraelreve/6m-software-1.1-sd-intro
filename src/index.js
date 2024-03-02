function sum(n1, n2) {
  return n1 + n2;
}

const userInput1 = prompt("Please enter a number:");
const userInput2 = prompt("Please enter a number:");

const x = sum(Number(userInput1), Number(userInput2));
console.log(x);
