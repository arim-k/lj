// 배열 처음: 인덱스 0
// 배열 끝: arr.length-1

// 배열 자체를 수정
const arr = ["b", "c", "d"];
arr.push("e"); // 끝, 새 요소 추가 늘어난 길이 반환
arr.pop(); // 끝, 제거된 요소 반환
arr.unshift("a"); // 처음, 새요소 추가  늘어난 길이 반환
arr.shift(); // 처음, 제거된 요서 반환

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
