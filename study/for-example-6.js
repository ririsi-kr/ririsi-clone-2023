function main(num) {
  let result = 0;

  for (let i = 0; i < num; i++) {
    if (i % 3 == 0) {
      //   console.log("더할건데?");
      result = result + i;
      console.log("i:", i);
      console.log("result in if: ", result);
    } else {
      //   console.log("안더할건데?");
      console.log("i:", i);
      console.log("result in else", result);
    }
  }

  console.log("result:", result);
}

main(10);

// 이유 설명하기

// 1. console.log 잘 사용하는 방법
// 2. 코드를 읽는 방법 : 위에서부터 아래로 순서대로
// 3. let 사용하는 방법
