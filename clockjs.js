const clock = document.querySelector("span#clockjs");
// const clock2 = document.querySelector("h2#clock2");
// const test = document.querySelector("h2#tttt");
// console.log("이거 뭐야", test);
//todo 작동이 안될때는 다양한 디버깅을 하며 문제를 해결한다.
//todo 1. html과 js가 연결이 잘 됐는지 console.log 2. 문법을 잘 맞게 작성했는지 등등
//test.innerText = "!!!!";
//clock.innerText = "???";
console.log(123123);

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
