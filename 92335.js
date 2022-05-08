function solution(n, k) {
    var num="";
    while(1){
        var a = Math.floor(n/k);
        if(a===0){
            num=n+num;
            break;
        }
        var b = n-a*k;
        n=a;        
        num=b+num; 
    }
    
    var prime = num.split('0');
    var answer = 0;
    for(var i=0; i<prime.length; i++){
        if(prime[i]===''||prime[i]==='1') continue;
        if(isPrime(parseFloat(prime[i])))
            answer++;
    }

    return answer;
}

function isPrime(num) {
  if(num === 2)
  return true;

  for(let i = 2; i<=Math.sqrt(num); i++){
    if(num % i === 0){
      return false;
    }
  }
  return true;
}
