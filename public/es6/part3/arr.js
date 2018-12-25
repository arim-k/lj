// 배열은 특수한 객체, 키는 순차적인 숫자

const a1 = [1, 2, 3, 4]; //숫자
const a2 = [1, "two", 3, null]; // 여러가지타입
const a3 = ["glad", "to", "see", "you"]; // 여러 줄
// 객체
const a4 = [
  { name: "Ruby", hardness: 9 },
  { name: "Diamond", hardness: 10 },
  { name: "Topaz", hardness: 8 }
];

const a5 = [[1, 3, 5], [2, 4, 6]]; // 배열

// 요소 숫자 반환
const arr = ["a", "b", "c"];
arr.length;

// 배열 요소 접근
arr[0];
arr[arr.length - 1]; // arr의 마지막 요소의 인덱스는 arr.length -1

// 새 값 할당
const arr = [1, 2, "c", 4, 5];
arr[2] = 3;
