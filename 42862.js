function solution(n, lost, reserve) {
    lost = lost.sort((a,b)=>a-b);
    reserve = reserve.sort((a,b)=>a-b);

    for(let i=0; i<reserve.length; i++){
        if(lost.indexOf(reserve[i])!==-1){
            lost.splice(lost.indexOf(reserve[i]),1);
            reserve.splice(i,1);
            i--;
        }
    }
    
    var answer = n-lost.length;
    for(let i=0; i<lost.length; i++){
        if(reserve.indexOf(lost[i]-1)!==-1){
            answer++;
            reserve.splice(reserve.indexOf(lost[i]-1),1);
        }else if(reserve.indexOf(lost[i]+1)!==-1){
            answer++;
            reserve.splice(reserve.indexOf(lost[i]+1),1);
        }
    }
    
    return answer;
}
