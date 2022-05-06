function solution(gems) {
    var gemsKinds = new Set(gems);
    var gemsCount = gemsKinds.size;
    var map = new Map();
    var count = Infinity;
    var answer=[1,1];
    
    for(var i=0; i<gems.length; i++){
        map.delete(gems[i],i);
        map.set(gems[i], i);

        if(map.size===gemsCount){
            const start = map.values().next().value;
            const end = i;
            if(end-start<count){
                answer=[start+1,end+1];
                count=end-start;
            }
            else if(end-start===count){
                if(start<answer[0]){
                    answer=[start+1,end+1]
                }
            }
        }
    }
    return answer;
}
