let num1 = NaN;
let num2 = NaN;
let result = NaN;
let operator = NaN;
const bar = document.getElementById("input");

function zero() {
  bar.value += "0";
}
function one() {
  bar.value += "1";
}
function two() {
  bar.value += "2";
}
function three() {
  bar.value += "3";
}
function four() {
  bar.value += "4";
}
function five() {
  bar.value += "5";
}
function six() {
  bar.value += "6";
}
function seven() {
  bar.value += "7";
}
function eight() {
  bar.value += "8";
}
function nine() {
  bar.value += "9";
}

function add() {
  if (isNaN(num1)) {
    num1 = +bar.value;
    bar.value = "";
    operator = "+";
  } else {
    operator = "+";
    bar.value = "";
  }
}
function subtract() {
  if (isNaN(num1)) {
    num1 = +bar.value;
    bar.value = "";
    operator = "-";
  } else {
    operator = "-";
    bar.value = "";
  }
}
function multiply() {
  if (isNaN(num1)) {
    num1 = +bar.value;
    bar.value = "";
    operator = "*";
  } else {
    operator = "*";
    bar.value = "";
  }
}
function divide() {
  if (isNaN(num1)) {
    num1 = +bar.value;
    bar.value = "";
    operator = "/";
  } else {
    operator = "/";
    bar.value = "";
  }
}

function cal(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
  }
}

function calculate() {
  num2 = +bar.value;
  result = cal(num1, num2, operator);
  bar.value = result;
  num1 = result;
}

function del() {
  bar.value = "";
  num1 = num2 = result = operator = NaN;
}
