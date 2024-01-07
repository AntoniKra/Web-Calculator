let firstNumber = "";
let secondNumber = "";
let result;
let mathOperation;
let changeNumber = false;
const basicOperations = document.querySelectorAll(".basicOperation");
const reset = document.querySelector("#reset");
const displayedNumber = document.querySelector("#result");
const numbers = document.querySelectorAll(".number");
const equal = document.querySelector("#equal");

numbers.forEach((ele) =>
  ele.addEventListener("click", (e) => {
    const clickedNumber = e.target.textContent;

    if (changeNumber) {
      console.log(secondNumber);
      secondNumber += clickedNumber;
      displayedNumber.textContent = secondNumber;
    } else {
      firstNumber += clickedNumber;
      displayedNumber.textContent = firstNumber;
    }
  })
);

reset.addEventListener("click", () => {
  displayedNumber.textContent = "";
  firstNumber = "";
  secondNumber = "";
  mathOperation = "";
  changeNumber = false;
});

basicOperations.forEach((ele) =>
  ele.addEventListener("click", (e) => {
    const basicOperation = e.target;
    basicOperation.classList.remove("orange");
    basicOperation.classList.add("reverseOrange");
    mathOperation = e.target.textContent;
    displayedNumber.textContent = "";
    changeNumber = true;
  })
);

equal.addEventListener("click", () => {
  if (mathOperation === "+")
    result = parseFloat(firstNumber) + parseFloat(secondNumber);
  displayedNumber.textContent = result;
});
