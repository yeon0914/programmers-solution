function solution(n) {
    var answer = '';
    
    while(1){
        var q=parseInt(n/3);
        var p=n%3;
        if(q==0){
            answer=p+answer;
            break;
        }
        if(p==0){
            q=q-1;
            answer='4'+answer;
            n=q;
            continue;
        }
        n=q;
        answer=p+answer;
    }
    if(answer[0]==0)
        answer=answer.slice(1,);
    return answer;
}
