'use strict';
function clearScreen() {
    document.getElementById("result").value = "";
}
function display(value) {
    document.getElementById("result").value += value;
}
function calculate() {
    var a = document.getElementById("result").value;
    var b = eval(a);
    document.getElementById("result").value = b;
}
function delet() {
    const arr = document.getElementById("result").value;
    const arrX = arr.slice(0, -1);
    document.getElementById("result").value = arrX;
}