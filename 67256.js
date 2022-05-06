function solution(numbers, hand) {
    var answer = '';
    var left = [1,4,7];
    var right=[3,6,9];
    var currentLeft = [3,0];
    var currentRight = [3,2];
    
    for(var i=0; i<numbers.length; i++){
        if(left.includes(numbers[i])){
            answer=answer+'L';
            var row =  Math.floor(numbers[i]/3);
            currentLeft=[row,0];
        }
        else if(right.includes(numbers[i])){
            answer=answer+'R';
            var row =  Math.floor(numbers[i]/3)-1;
            currentRight=[row,2];
        }
        else{
            var row = Math.floor(numbers[i]/3);
            if(numbers[i]===0) row = 3;
            var leftDist = Math.abs(row-currentLeft[0])+Math.abs(1-currentLeft[1]);
            var rightDist = Math.abs(row-currentRight[0])+Math.abs(1-currentRight[1]);
            
            if(leftDist<rightDist||(leftDist===rightDist&&hand==="left")){
                answer=answer+'L';
                currentLeft=[row,1];
            }
            else if(leftDist>rightDist||(leftDist===rightDist&&hand==="right")){
                answer=answer+'R';
                currentRight=[row,1];
            }
        }
    }
    return answer;
}
