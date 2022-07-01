function solution(citations) {
    citations = citations.sort((a,b)=>b-a);
    
    let current = 0;
    let count = citations[0]
    for(; count>=0; count--){
        if(citations[current]>=count) {
            let temp = current;
            while(temp<citations.length&&citations[current]===citations[temp]){
                temp++;
            }
            current=current + temp-current;
        }
        if(current>=count) break;
    }
    
    return count;
}
