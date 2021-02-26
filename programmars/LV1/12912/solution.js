function solution(a, b) {
  var newArr = [];
  const smallNum = a > b ? b : a;
  const bigNum = a > b ? a : b;

  for (let i = smallNum; i <= bigNum; i++) newArr.push(i);

  console.log(newArr);
  return newArr.reduce((a, b) => a + b);
}

