// 배열 처음: 인덱스 0
// 배열 끝: arr.length-1

// 배열 자체를 수정
const arr = ["b", "c", "d"];
arr.push("e"); // 끝, 새 요소 추가 늘어난 길이 반환
arr.pop(); // 끝, 제거된 요소 반환
arr.unshift("a"); // 처음, 새요소 추가  늘어난 길이 반환
arr.shift(); // 처음, 제거된 요소 반환

// 배열의 끝에 여러 요소를 추가한 사본 반환
// concat은 제공받은 배열 한 번만 분해,
const arr = [1, 2, 3];
arr.concat(4, 5, 6);
arr.concat([4, 5, 6]);
arr.concat([4, 5], 6);
arr.concat([4, [5, 6]]);

// 배열 일부 가져오기
// slice(어디서부터, 어디까지(바로 앞 인덱스까지)) 가져올지 지정
const arr = [1, 2, 3, 4, 5];
arr.slice(3);
arr.slice(2, 4);
arr.slice(-2);
arr.slice(1, -2);
arr.slice(1, -2);
arr.slice(-2, -1);

// 임의의 위치에 요소 추가하거나 제거하기
// splice(수정을 시작학 인덱스, 제거할 요소 숫자, ...배열에 추가될 요소)
const arr = [1, 5, 7];
arr.splice(1, 0, 2, 3, 4);
arr.splice(5, 0, 6);
arr.splice(1, 2);
arr.splice(2, 1, "a", "b");

// 배열 안에서 요소 교체
// copyWithin(복사한 요소를 붙여넣을 위치, 복사를 시작할 위치, 복사를 끝낼 위치)
const arr = [1, 2, 3, 4];
arr.copyWithin(1, 2);
arr.copyWithin(2, 0, 2);
arr.copyWithin(0, -3, -1);

// 특정 값으로 배열 채우기
const arr = new Array(5).fill(1);
arr.fill("a");
arr.fill("b", 1);
arr.fill("c", 2, 4);
arr.fill(5.5, -4);
arr.fill(0, -3, -1);

// 배열 정렬과 역순 정렬
const arr = [1, 2, 3, 4, 5];
arr.reverse();

const arr = [5, 3, 2, 4, 1];
arr.sort();

// sort는 정렬 함수를 받음
const arr = [
  { name: "tin" },
  { name: "arim" },
  { name: "karlie" },
  { name: "todd" },
];
arr.sort();
arr.sort((a, b) => a.name > b.name);
arr.sort((a, b) => a.name[1] < b.name[1]);

// 배열 검색
const o = { name: "Jerry" };
const arr = [1, 5, "a", o, true, 5, [1, 2], 9];

// indexOf (===)정확히 일치하는 첫 번째 요소의 인덱스 반환
arr.indexOf(5);
arr.lastIndexOf(5);
arr.indexOf("a");
arr.lastIndexOf("a");
arr.indexOf({ name: "Jerry" });

// findIndex 조건에 맞는 요소의 인덱스
const arr = [{ id: 5, name: "judith" }, { id: 7, name: "francis" }];
arr.findIndex(o => o.id === 5);
arr.findIndex(o => o.name === "francis");
arr.findIndex(o => o.id === 17); // -1

// find 요소 자체를 원할 때
const arr = [{ id: 5, name: "judith" }, { id: 7, name: "francis" }];
arr.find(o => o.id === 5);
arr.find(o => o.id === 2); // undefined
