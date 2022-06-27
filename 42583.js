function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let enterIndex = -1;
    let outIndex=-1;
    let currentWeight = 0;
    let enterBridge = new Array(truck_weights.length);
    
    while(outIndex<truck_weights.length-1){
        answer++;
        if(enterBridge[outIndex+1]&&answer-enterBridge[outIndex+1]===bridge_length){
            outIndex++;
            currentWeight-=truck_weights[outIndex];
        }

        
        if(currentWeight+truck_weights[enterIndex+1]<=weight){
            enterIndex++;
            currentWeight+=truck_weights[enterIndex];
            enterBridge[enterIndex]=answer;
        }
    }
    
    return answer;
}
