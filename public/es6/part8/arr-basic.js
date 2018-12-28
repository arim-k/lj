// array literal
const arr1 = [1, 2, 3];
const arr2 = ["one", 2, "three"];
const arr3 = [[1, 2, 3], ["one", 2, "three"]];
const arr4 = [
  { name: "arim", type: "object", luckyNumbers: [5, 7, 13] },
  [{ name: "susan", type: "object" }, { name: "duncan", type: "object" }],
  1,
  function() {
    return "arrays can contain functinos too.";
  },
  "three",
];
// 접근
arr1[0];
arr1[2];
arr3[1];
arr4[1][0];

// 길이
arr1.length;
arr4.length;
arr4[1].length;

//길이 늘리기
arr1[4] = 5;
arr1;
arr1.length;

// 배열의 현재 길이보다 큰 인덱스에 접근하는 것만으로 배열의 길이 늘어나지 않음
arr2[10];
arr2.length;

// array 생성자 (거의 사용 X)
const arr5 = new Array(); // 빈 배열
const arr6 = new Array(1, 2, 3); // [1,2,3]
const arr7 = new Array(2); // 길이 2, 요소 undefined
const arr8 = new Array("2"); // ["2"]
