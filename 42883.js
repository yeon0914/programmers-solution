function solution(number, k) {
    let answer = '';
    let currentIndex = -1;
    let length = number.length-k;
    let sort = number.split("").sort((a,b)=>b-a);

    for(let i=0; i<length; i++){
        let max = -1;
        let maxIndex = -1;
        for(let j=9; j>=0; j--){
            let index = number.slice(currentIndex+1,number.length+i-length+1).indexOf(j);
            if(index!==-1){
                maxIndex=index+currentIndex+1;
                max = j;
                break;
            }
        }
        currentIndex=maxIndex;
        answer=answer+max;
    }
    
    
    return answer;
}
