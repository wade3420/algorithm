function solution(arr, divisor) {
    var answer = [];
    arr.forEach((e)=>{
        if(e%divisor === 0){
            answer.push(e);
        }
    })
    if(answer.length === 0){
        answer.push(-1);
    }
    answer.sort((a,b) => a-b);
    
    return answer;
}