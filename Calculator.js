var num;
var operator;
var first;
var second;
var opt_opt;
var mark;
var tick;
mark = 0;
tick = 0;

//======================decimal point function
function clickbuttond() {
    if(parseInt(num.value) == num.value) {
        num.value = num.value + ".";
    }
}
//======================clear function
function clickclear() {
    num = document.getElementById("inputnums");
    num.value = "0";
    operator = document.getElementById("inputopt");
    operator.value = "";
    first = undefined;
    second = undefined;
    result = undefined;
    opt_opt = undefined;
    mark = 0;
    tick = 0;
}
//=======================sign function
function clickbuttonc() {
    num.value = -num.value;
}
//=======================input number function
function clickbutton(nums) {
    num = document.getElementById("inputnums");
    operator = document.getElementById("inputopt");
    if(num.value == "0" || num.value == "Not a number" || operator.value != "") {
        num.value = "";
        num.value = num.value + nums;
        operator.value = "";  
    }
    else if(mark == 1) {
        num.value = "";
        num.value = nums;
        mark = 0;
        operator.value = "";
    }
    else {
        num.value = num.value + nums;
        operator.value = "";
    }
    tick = 1;
}
//=======================input operator function
function clickbuttono(opts) {
    if(first == undefined) {
        first = parseFloat(num.value);
    }
    else {
        if(tick == 0) {
            first = first;
        }
        else {
            clickresult();
            num.value = result;
            second = num.value;
        }
    }
    operator = document.getElementById("inputopt");
    operator.value = opts;
    opt_opt = opts;
    tick = 0;
}
//========================output function
function clickresult() {
    num = document.getElementById("inputnums");
    operator = document.getElementById("inputopt");
    if(opt_opt != undefined && num.value == "0") {//////////////////////5 + 6 + 7 +||5 =
        second = first;
    }
    else {
        second = parseFloat(num.value);
    }
    switch(opt_opt) {
        case undefined:
        result = parseFloat(num.value);
        num.value = result;
        first = result;
        mark = 1;
        break;
        case "+":
        result = first + second;
        num.value = result;
        first = result;
        operator.value = "";
        break;
        case "-":
        result = first - second;
        num.value = result;
        first = result;
        operator.value = "";
        break;
        case "*":
        result = first * second;
        num.value = result;
        first = result;
        operator.value = "";
        break;
        case "/":
        if(second == 0) {
            num.value = "Not a number"
            operator.value = "";
            result = undefined;
            first = undefined;
            second = undefined;
        }
        else {
            result = first / second;
            num.value = result;
            first = result;
            operator.value = "";
        }
        break;
    }
}
