// map 사본 반환
const cart = [{ name: "widget", price: 9.95 }, { name: "gadget", price: 22.9 }];
const names = cart.map(x => x.name);
const prices = cart.map(x => x.price);
const discountPrices = prices.map(x => x * 0.8);

// map index 사용 - 인덱스에 따라 결합
const items = ["widget", "gadget"];
const prices = [9.95, 22.95];
const cart = items.map((x, i) => ({ name: x, price: prices[i] }));

// filter 사본 반환
// 카드 덱 만든당
const cards = [];
for (let suit of ["H", "C", "D", "S"])
  for (let value = 1; value <= 13; value++) cards.push({ suit, value });

cards.filter(c => c.value === 2);
cards.filter(c => c.suit === "D");
cards.filter(c => c.value > 10);
cards.filter(c => c.value > 10 && c.suit === "H");

// map, filter
function cardToString(c) {
  const suits = { H: "\u2665", C: "\u2663", D: "\u2666", S: "\u2660" };
  const values = { 1: "A", 11: "J", 12: "Q", 13: "K" };
  for (let i = 2; i <= 10; i++) values[i] = [i];
  return values[c.value] + suits[c.suit];
}
cards.filter(c => c.value === 2).map(cardToString);
cards.filter(c => c.value > 10 && c.suit === "H").map(cardToString);

// reduce 배열 자체를 변형 -- 이해필요
const arr = [5, 7, 2, 4];
const sum = arr.reduce((a, x) => (a += x), 0);
const sum = arr.reduce((a, x) => (a += x));

// 문자열 병합
const arr = [1, null, "hello", "world", true, undefined];
delete arr[3];
arr.join();
arr.join("");
arr.join("--");

const attributes = ["nimble", "perceptive", "generous"];
const html = "<ul><li>" + attributes.join("</li><li>") + "</li></ul>";
const html = attributes.join("</li><li>");
