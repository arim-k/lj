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

// global scope - bad
let name = "Irena";
let age = 25;
function great() {
  console.log(`Hello ${name}`);
}
function getBirthYear() {
  return new Date().getFullYear() - age;
}
// good
let user = {
  name: "Irena",
  age: 25,
};
function great(user) {
  console.log(`Hello ${user.name}`);
}
function getBirthYear(user) {
  return new Date().getFullYear() - user.age;
}

// block scope
console.log("before block");
{
  console.log("inside block");
  const x = 3;
  console.log(x);
}
console.log(`outside block; x=${x}`);

// x는 이름만 같은 2개의 변수
{
  // block 1
  const x = "blue";
  console.log(x);
}
console.log(typeof x);
{
  // block 2
  const x = 3;
  console.log(x);
}
console.log(typeof x);

// scope 중첩 변수 숨김 varibale masking
{
  let x = "blue";
  console.log(x);
  {
    let x = 3;
    console.log(x);
  }
  console.log(x);
}
console.log(typeof x);

// 계층적
{
  let x = { color: "blue" };
  let y = x;
  let z = 3;
  {
    let x = 5;
    console.log(x);
    console.log(y.color);
    y.color = "red";
    console.log(z);
  }
  console.log(x.color);
  console.log(y.color);
  console.log(z);
}

// closure (closing 스코프를 함수 주변으로 좁힘 , 함수가 특정 스코프에 접근할수 있도록 의도적으로 그 스코프에서 정의)
let globalFunc; // global not defined
{
  let blockVar = "a"; // block scope var
  globalFunc = function() {
    console.log(blockVar);
  };
}
globalFunc();

// 함수를 정의해 클로저를 만들면 접근 가능 - 이해필요
let f;
{
  let o = { note: "Safe" };
  f = function() {
    return o;
  };
}
let oRef = f();
oRef.note = "Not so safe after all";

// IIFE 즉시 호출하는 함수 표현식
// 내부에 있는 것들이 모두 스코프를 가지지만 , 자체가 함수이므로 스 코프 밖으로 무언가 내보내기 가능
(function() {
  // something..
})();

const message = (function() {
  const secret = "I'm a secret"; // 외부에서 접근 불가
  return `The secret is ${secret.length} characters long.`;
})();
console.log(message);

// f는 자신이 몇번 호출됐는지 알고 있음
const f = (function() {
  let count = 0;
  return function() {
    return `I have been called ${++count} time(s).`;
  };
})();
f();
f();

// var로 선언한 변수는 선언만 끌어올려짐, 할당은 X (hositing)
let var1;
let var2 = undefined;
var1;
var2;
undefinedVar;

// let
x;
let x = 3;

// var
x;
var x = 3;
x;

// 혼란을 초래하는 코드
if (x !== 3) {
  console.log(y);
  var y = 5;
  if (y === 5) {
    var x = 3;
  }
  console.log(y);
}
if (x === 3) {
  console.log(y);
}

var x = 3;
if (x === 3) {
  var x = 2;
  console.log(x);
}
console.log(x);

// 함수 호이스팅
f();
function f() {
  console.log("f");
}

// 변수에 할당한 함수 표현식은 호이스팅 안됨
f();
let f = function() {
  console.log("f");
};

// 사각지대 temporal dead zone
// typeof 연산자는 변수가 선언됐는지 알아볼때 존재확인
// let으로 선언한 변수는 선언하기 전까지 존재하지 X, 스코프 안에서 변수의 사각지대는 변수가 선언되기 전의 코드
if (typeof x === "undefined") {
  console.log("x doesn't exist or is undefined!");
} else {
  // x 사용해도 안전
}

if (typeof x === "undefined") {
  console.log("x doesn't exist or is undefined");
} else {
  // x 사용해도 안전
}
let x = 5;

// strict mode
(function() {
  "use strict";
});
