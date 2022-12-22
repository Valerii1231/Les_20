/*
let a = +prompt('Enter a ');
let b = +prompt('Enter b ');
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
  alert(`${ maxNumber(a, b) } = ${ maxNumber(a, b) }`);
} else {
  alert(maxNumber(a, b));
}



//  2
let number = +prompt('Enter the number');
function revers(number) {
  nunber = -number;
  return nunber;
}
alert(revers(number));


//  3
let number1 = prompt('Enter the number');
let count = prompt('Enter the count');
function three(number1, count) {
  return (number1 + 3 * count);
}
alert(three(+number1, +count));

*/
//  4
let km = +prompt('Enter the km');
let metric = prompt('Enter the metric');

function getMetric(metric, km, m, cm) {
  if (metric === 'm') {
    m(km);
  }
  if (metric === 'cm') {
    cm(km);
  } 
  return meter, centimeter;
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