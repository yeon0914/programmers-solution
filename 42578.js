function solution(clothes) {
    let type = {};
    
    for (let i=0; i<clothes.length; i++){
        if(type[clothes[i][1]]){
            type[clothes[i][1]]=type[clothes[i][1]]+1;
        }else
            type[clothes[i][1]]=1;
    }
    
    let answer = 1;
    for(item in type){
        answer = answer*(type[item]+1);
    }
    return answer-1;
}
