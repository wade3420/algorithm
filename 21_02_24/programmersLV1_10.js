function solution(s) {
    let len = s.length;
    var answer = '';
    if(len%2 == 1){
        answer = s[Math.floor(len/2)];  
    }else{
        answer = s[len/2 -1]+ s[len/2];
    }
    
    return answer;
}