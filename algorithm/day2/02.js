// 배열의 기능
// 주어진 fruits 배열에서 마지막 요소를 꺼내 newFruits에 넣어주세요.
let fruits = ["사과", "바나나", "파인애플"];

const newFruits = [];
newFruits.push(fruits[fruits.length-1]);
console.log(newFruits);

// 주어진 fruits 배열의 모든 요소에 "맛있는" 이라는 문자열을 추가하세요.
for(let i = 0; i < fruits.length; i++) {
  fruits[i] = "맛있는 " + fruits[i];
}

console.log(fruits);
