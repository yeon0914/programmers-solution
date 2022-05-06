function solution(numbers) {
      
    numbers.sort(function(a, b){
        var x = a.toString();
        var y = b.toString();
        var i;
        if(x+y>y+x)
            return -1;
        else if (y+x>x+y)
            return 1;
        return 0;
    });
    var answer="";
    for(var i=0; i<numbers.length; i++){
        answer=answer+numbers[i];
    }
    if(answer[0]=='0')
        return "0";
    return answer;
}
 
