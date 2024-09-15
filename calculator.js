let result = NaN;
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
  bar.value += "+";
}
function subtract() {
  bar.value += "-";
}
function multiply() {
  bar.value += "*";
}
function divide() {
  bar.value += "/";
}

function calculate() {
  result = eval(bar.value);
  bar.value = result;
}

function del() {
  bar.value = "";
}
