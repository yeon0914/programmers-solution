function solution(answers) {
    const a = [1,2,3,4,5];
    const b = [2,1,2,3,2,4,2,5];
    const c = [3,3,1,1,2,2,4,4,5,5];
    let count=[0,0,0];
    
    for(let i=0; i<answers.length; i++){
        if(answers[i]===a[i%5]) count[0]++;
        if(answers[i]===b[i%8]) count[1]++;
        if(answers[i]===c[i%10]) count[2]++;
    }
    
    let answer=[];
    const max = Math.max(...count);
    if(count[0]===max) answer.push(1)
    if(count[1]===max) answer.push(2)
    if(count[2]===max) answer.push(3)
    
    
    return answer;
}
