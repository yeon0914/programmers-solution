function solution(p) {
    var answer = '';
    answer= make(p);
    return answer;
}

function make(arr){
    if(!arr)
        return '';
    
    var index;
    var count=0;
    var flag=0;
    
    for(var i=0; i<arr.length; i++){
        if(arr[i]=='(') count++;
        else count--;
            
        if(count==0){
            index=i+1;
            break;
        }
        if(count<0) flag=1;
    }
    
    var u = arr.slice(0,index);
    var v = arr.slice(index);
    
    if(flag==0)
        return u + make(v);
    else{
        var temp = make(v);
        var temp_u="";
        for(var i=1; i<u.length-1; i++){
            if(u[i]=='(') temp_u=temp_u+')';
            else temp_u=temp_u+'(';    
        }
        return '('+temp+')'+temp_u;
    }
}
