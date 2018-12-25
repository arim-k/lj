let a = 1; // 원본
let b = a; // 사본
a = 2; // 원본값 바꿈
console.log(b); /// 사본 값 안바뀜

a === 2; // true

// 값 자체를 전달하므로 함수 안에서 변수의 값이 바뀌어도 함수 외부에서는 바뀌지 않음
function change(a) {
  a = 5;
}

a = 3;
change(a);
console.log(a); //3

// 객체는 가변, 객체를 복사,전달할때는 객체가 아니라 그 객체를 가리키고 있다는 사실(참조)를 복사전달
// 원본이 바뀌면 사본도 바뀜
let o = { a: 1 };
let p = o;
o.a = 2;
console.log(p); // {a:2}

let o = { a: 1 };
let p = o;
p === o;
o = { a: 2 }; // o는 다른것을 가리킴, {a:1}이 수정된 것이 아니라.
p === o;
console.log(p);

//객체를 가리키는 변수는 그 객체를 가리키고 있을 뿐, 객체 자체는 아님
let q = { a: 1 };
q === { a: 1 }; //false

// 참조를 전달하므로 함수안에서 객체변경하면 외부에서도 바뀜
function change_o(o) {
  o.a = 999;
}
let o = { a: 1 };
change_o(o);
console.log(o); // {a:999}
