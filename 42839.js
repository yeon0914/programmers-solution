var result = [];
function solution(numbers) {
    var answer = 0;
    
    var number = numbers.split("");
    
    for(var i=1; i<=numbers.length; i++){
        getCombinations(number, 0,i);
    }
    for(var i=0; i<result.length; i++){
        if(findPrime(parseInt(result[i]))==-1)
            answer++;
    }
    return answer;
}

function findPrime(num){
    if(num==1 || num==0)
        return 1;
    for(var i=2; i<num; i++){
        if(num%i==0)
            return 1;
    }
    return -1;
}

function getCombinations(arr, n, k){
    if(n==arr.length-1){
        const str = arr.slice(0, k).join("");
        if(!result.includes(parseInt(str)))
            result.push(parseInt(str));
        return;
    }
    else{
        for(let i=n; i<arr.length; i++){
            let temp = arr[n];
            arr[n] = arr[i];
            arr[i]=temp;
            
            getCombinations(arr, n+1, k);
            
            arr[i]=arr[n];
            arr[n]=temp;
        }
        return result;
    }
}
