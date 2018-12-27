// 스코프는 변수,상수,매개변수 언제 어디서 정의되는지 결정
function f(x) {
  return x + 3;
}
f(5);
x;

// js의 스코프는 정적
function f1() {
  console.log("one");
}
function f2() {
  console.log("two");
}
f2();
f1();
f2();

//
const x = 3;

function f() {
  console.log(x);
  console.log(y);
}
{
  // 새 스코프
  const y = 5;
  f();
}

// 전역 스코프
let name = "Irena";
let age = 25;
function great() {
  console.log(`Hello ${name}`);
}
function getBirthYear() {
  return new Date().getFullYear() - age;
}
