function solution(priorities, location) {
    var answer = 0;    
    var count=0;
    
    while(1){
        var result = findMax(priorities);
        if(priorities[0]==priorities[result]){
            count++;
            if(location==0)
                return count;
            priorities.shift();
            location--;
        }
        else{
            priorities = [...priorities.slice(result),...priorities.slice(0,result)];
            location = location - result;
            if(location <0)
                location = location +priorities.length;
            count++;
            if(location ==0)
                return count;
            priorities.shift();
            location--;
        }
    }
    return answer;
}

function findMax(priorities){
    var max = priorities[0];
    var maxIndex = 0;
    for(var i=0; i<priorities.length; i++){
        if(priorities[i]>max){
            max = priorities[i];
            maxIndex = i;
        }
    }
    return maxIndex;
}
