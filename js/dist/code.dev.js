"use strict";

// 1
var a = +prompt('Enter a ');
var b = +prompt('Enter b ');

function maxNumber(a, b) {
  if (a > b) {
    return a;
  } else {
    if (a = b) {
      return a, b;
    } else {
      return b;
    }
  }
}

if (a === b) {
  alert("".concat(maxNumber(a, b), " = ").concat(maxNumber(a, b)));
} else {
  alert(maxNumber(a, b));
} //  2


var number = +prompt('Enter the number');

function revers(number) {
  nunber = -number;
  return nunber;
}

alert(revers(number)); //  3

var number1 = prompt('Enter the number');
var count = prompt('Enter the count');

function three(number1, count) {
  return number1 + 3 * count;
}

alert(three(+number1, +count)); //  4

var km = +prompt('Enter the km');
var metric = prompt('Enter the metric');

function getMetric(metric, km, m, cm) {
  switch (metric) {
    case 'm':
      m(km);
      return meter;

    case 'cm':
      cm(km);
      return centimeter;
  }
}

function kmToM() {
  meter = km * 1000;
  return meter;
}

function kmToCm() {
  centimeter = km * 100000;
  return centimeter;
}

alert(getMetric(metric, km, kmToM, kmToCm));