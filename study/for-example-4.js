function main(num) {
  for (let i = 0; i < num; i = i + 1) {
    // % 가 뭘까요? 왼쪽의 피연산자를 오른쪽의 피연산자로 나눈 후, 그 나머지를 반환함.
    if (i % 3 != 0) {
      console.log(i);
    } else {
      console.log("짝!");
    }
  }
}

main(10);

// 이유 이해하기
// Quiz : 4로 하는 삼육구 만들기
// 4, 8, 12 마다 짝짝짝
