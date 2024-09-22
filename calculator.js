let result = NaN;
const bar = document.getElementById("input");

function add_letter(btn) {
  bar.value += btn;
}

function calculate() {
  result = eval(bar.value);
  bar.value = result;
}

function del() {
  bar.value = "";
}
