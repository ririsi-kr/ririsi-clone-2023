function main(num) {
  for (let i = 0; i < num; i = i + 1) {
    if (i < 5) {
      console.log(i);
    } else {
      console.log("안알려줌");
    }
  }
}

main(10);
