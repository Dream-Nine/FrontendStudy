let sequence = [];
let inputStr = null;
do {
  inputStr = prompt(
    "숫자를 하나씩 입력해주세요(아무런 입력이 없으면 입력이 멈춥니다) : ",
    ""
  );
  if (Boolean(inputStr) === false) {
    break;
  }
  let inputNum = Number(inputStr);
  sequence.push(inputNum);
} while (true);
document.getElementById("app").innerHTML = `입력 받은 수열 : ${sequence}`;

function solution(numbers) {
  let length = numbers.length;
  let sums = [];

  if (length === 1) {
    return numbers;
  }

  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      sums.push(numbers[i] + numbers[j]);
    }
  }

  sums = new Set(sums);

  sums = Array.from(sums);

  sums.sort(function (a, b) {
    return a - b;
  });
  return sums;
}

document.getElementById("app2").innerHTML = `합들 : ${solution(sequence)}`;
