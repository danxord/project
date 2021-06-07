"use strict";

/* function showFirstMessage(text) {
  console.log(text);
}

showFirstMessage('Hello world!');
 */

/* function calc(a, b) {
  return (a + b);
}

console.log(calc(4, 3));
console.log(calc(14, 113));
 */


/* function ret() {
  let num = 50;
  return num;
}

const anotherNum = ret();
console.log(anotherNum); */


//1 варик через косоль лог в конце
function testing1() {
  return ('flex like oou');
}

console.log(testing1());


//2 варик через вызов функции
function testing2() {
  console.log('flex like oou');
}

testing2();



//Стрелочная 1
const calc = (a, b) => {
  return a + b;
};

console.log(calc(2, 3));


//Стрелочная 2
const calc2 = (a, b) => a + b;

console.log(calc2(1, 8));
