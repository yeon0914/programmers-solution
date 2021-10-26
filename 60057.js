function solution(s) {
    var answer = 0;
    
    if(s.length===1)
        return 1;
    
    for(var i=1; i<=s.length/2; i++){
        var start = s.slice(0, i);
        var count=1;
        var tempresult=0;
        for(var j=i; j+i<=s.length; j=j+i){
            var temp = s.slice(j, j+i);
            
            if(start===temp)
                count=count+1;
            else{
                tempresult=tempresult+i;
                if(count!==1){
                    tempresult=tempresult+count.toString().length;
                }
                //answer=answer+count;
                count=1;
                start=temp;
            }
        }

        if(j===s.length){
            if(count!==1){
                tempresult=tempresult+count.toString().length+i;
            }
            else{
                tempresult=tempresult+i;
            }
        }
        else{
            if(count!==1){
                tempresult=tempresult+count.toString().length;
            }
             tempresult=tempresult+(s.length-j)+i;
        }

//         tempresult=tempresult+(s.length-j)+i;
//         if(count!==1){
//             tempresult=tempresult+count.toString().length;
//             str=str+count;
//         }
//         str=str+s.slice(j,s.length);
//         return str;
        
        if(i===1)
            answer=tempresult;
        else{
            if(tempresult<answer)
                answer=tempresult;
        }

    }
    
    return answer;
}
