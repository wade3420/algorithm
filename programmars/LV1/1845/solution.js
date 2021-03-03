function solution(nums) {
  var answer = 0;
  let plens = nums.length / 2;
  let set = new Set(nums);
  let pnems = Array.from(set).length;
  answer = pnems;
  if (plens < pnems) {
    answer = plens;
  }

  return answer;
}
