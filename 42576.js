function solution(participant, completion) {
    
    participant.sort();
    completion.sort();
    
    let i=0;
    let j=0;
    
    let answer=""
    while(1){
        if(participant[i]===completion[j]){
            i++;
            j++;
        }else{
            if(j+1<completion.length && participant[i]===completion[j+1]){
                answer=completion[j];
                break;
            }else{
                answer=participant[i];
                break;
            }
        }
    }
    return answer;
}
