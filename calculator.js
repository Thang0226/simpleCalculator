let num1;
let num2;
let result;
let operator;
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
  operator = "+";
}
function subtract() {
  operator = "-";
}
function multiply() {
  operator = "*";
}
function divide() {
  operator = "/";
}

function cal(a, b, op) {
  switch (op) {
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
  bar.value = "";
}

function del() {
  bar.value = "";
}
