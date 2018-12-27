//반환 값
function getGreeting() {
  return "hello world";
}
getGreeting();

// 함수를 호출하지 않고 참조하기만 할 수도
const f = getGreeting;
f();

// 객체에 할당
const o = {};
o.f = getGreeting;
o.f();

// 배열 요소에 할당
const arr = [1, 2, 3];
arr[1] = getGreeting;
arr[1]();

// 매개변수
function avg(a, b) {
  return (a + b) / 2;
}
avg(5, 10);

// 함수 호출 시, 매개변수는 변수 자체가 아니라 그 값은 전달받음
function f(x) {
  console.log(`f 내부: x=${x}`);
  x = 5;
  console.log(`f 내부: x=${x} (할당 후)`);
}
let x = 3;
console.log(`f 호출 전:x=${x}`);
f(x);
console.log(`f 호출 후:x=${x}`);

// 함수 안 매개변수에 값을 할당해도 바깥에 있는 변수에 영항 X
// 함수 안에서 객체 자체를 변경하면, 객체는 함수 바깥에서도 바뀐 점 반영
function f(o) {
  o.message = `f 안에서 수정함 (이전 값: ${o.message})`;
}

let o = {
  message: "초깃값",
};
console.log(`f 호출 전: o.message=${o.message}`);
f(o);
console.log(`f 호출 후: o.message=${o.message}`);

// 함수 내부에서 할당한 객체는 새로운 객체
function f(o) {
  o.message = "f에서 수정함";
  o = {
    message: "새로운 객체",
  };
  console.log(`f 내부: o.message="${o.message}" (할당 후)`);
}

let o = {
  message: "초기값",
};

console.log(`f를 호출하기 전: o.message='${o.message}'`);
f(o);
console.log(`f를 호출한 다음: o.message = "${o.message}"`);

// 정해진 매개변수에 값 없으면 암시적으로 undefined
function f(x) {
  return `in f: x=${x}`;
}
f();

// 매개변수 해체 - 객체를 변수로 해체
function getSentence({ subject, verb, object }) {
  return `${subject} ${verb} ${object}`;
}
const o = {
  subject: "a",
  verb: "b",
  object: "c",
};
getSentence(o);

// 매개변수 해체 - 배열 해체
function getSentence([subject, verb, object]) {
  return `${subject} ${verb} ${object}`;
}

const arr = ["a", "b", "c"];
getSentence(arr);

// 확산 연산자 ... 함수 안에서 마지막 매개변수로
function addPrefix(prefix, ...words) {
  const prefixedWords = [];
  for (let i = 0; i < words.length; i++) {
    prefixedWords[i] = prefix + words[i];
  }
  return prefixedWords;
}
addPrefix("con", "verse", "vex");

// 매개변수 기본값
function f(a, b = "default", c = 3) {
  return `${a} - ${b} - ${c}`;
}
f(5, 6, 7);
f(5, 6);
f(5);
f();

// 객체의 프로퍼티인 함수(method)
const o = {
  name: "arim",
  bark: function() {
    return "hi";
  }, // bark() {return 'hi'}
};

// this
const o = {
  name: "arim",
  speak() {
    return `I'm ${this.name}`;
  },
};
o.speak();

const speak = o.speak;
speak === o.speak; // true
speak();

// 중첩된 함수 속 this (혼란의 this)
const o = {
  name: "arim",
  greetBackwards: function() {
    function getReverseName() {
      let nameBackwards = "";
      for (let i = this.name.length - 1; i >= 0; i--) {
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    }
    return `${getReverseName()} ihihih`;
  },
};
o.greetBackwards(); // 이 시점에서 this 의도한대로 X

// 위의 문제 해결하기 위에 다른 변수에 this 할당
const o = {
  name: "arim",
  greetBackwards: function() {
    const self = this;
    function getReverseName() {
      let nameBackwards = "";
      for (let i = self.name.length - 1; i >= 0; i--) {
        nameBackwards += self.name[i];
      }
      return nameBackwards;
    }
    return `${getReverseName()} ihihih`;
  },
};
o.greetBackwards();

// 함수 표현식, 익명함수
const f = function() {};
const g = function f() {}; // g에 우선순위 , 접근하려면 g

// 함수 안에서 자신을 호출할 때 (재귀함수)
const g = function f(stop) {
  if (stop) console.log("f stopped");
  f(true); // 자기 자신 참조
};
g(false); // 함수 호출

// ES6 arrow function
// function 생략, 매개변수 1개면 () 생략, 표현식 하나면 중괄호, return문 생략
const f1 = function() {
  return "hello";
};
const f1 = () => "hello";

const f2 = function(name) {
  return `hello ${name}`;
};
const f2 = name => `hello ${name}`;

const f3 = function(a, b) {
  return a + b;
};
const f3 = (a, b) => a + b;

const o = {
  name: "arim",
  greetBackwards: function() {
    const getReverseName = () => {
      let nameBackwards = "";
      for (let i = this.name.length - 1; i >= 0; i--) {
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    };
    return `${getReverseName()} ihihih`;
  },
};
o.greetBackwards();

// call method - 매개변수 직접 받음 (함수처럼)
const bruce = { name: "Bruce" };
const madeline = { name: "Madeline" };

function greet() {
  return `Hello I'm ${this.name}`;
}
greet();
greet.call(bruce);
greet.call(madeline);

function update(birthYear, occupation) {
  this.birthYear = birthYear;
  this.occupation = occupation;
}

update.call(bruce, 1949, "singer");
update.call(madeline, 1942, "actress");

// apply method - 매개변수 배열로 받음
update.apply(bruce, [1995, "actor"]);
update.apply(madeline, [1944, "writer"]);

// bind - 나중에~~~ call, apply도 나중에 어렵당
