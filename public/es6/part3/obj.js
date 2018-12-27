const sam1 = {
  name: "Sam",
  age: 4,
};

// 한 줄 선언
const sam2 = { name: "Sam", age: 4 };

// 프로퍼티 값도 객체가 될 수 있음
const sam3 = {
  name: "Sam",
  classification: {
    kingdom1: "a",
    kingdom2: "b",
    kingdom3: "c",
    kingdom4: "d",
    kingdom5: "e",
    kingdom6: "f",
  },
};

// 접근
sam3.classification.kingdom1;
sam3["classification"].kingdom1;
sam3.classification["kingdom1"];
sam3["classification"]["kingdom1"];

// 객체에 함수담기
sam3.speak = function() {
  return "Meow!";
};

sam3.sepak();

// 객체에서 프로퍼티 제거
delete sam3.classification;
delete sam3.speak;
