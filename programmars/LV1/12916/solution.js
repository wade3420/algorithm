function solution(s) {
  const lows = s.toLowerCase();
  let pCount = 0;
  let yCount = 0;

  lows.split("").forEach((e) => {
    if (e === "p") {
      pCount += 1;
    } else if (e === "y") {
      yCount += 1;
    }
  });
  console.log(pCount, yCount);
  let answer = pCount == yCount ? true : false;
  if (pCount === 0) {
    answer = false;
  }

  return answer;
}
