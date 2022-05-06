var priority = [];

function solution(expression) {
    var answer = 0;
    var temp = "";
    var array = [];
    for(var i=0; i<expression.length; i++){
        if((expression[i]=='+'||expression[i]=='-'||expression[i]=='*')&&i!=0){
            array.push(temp);
            array.push(expression[i]);
            temp="";
        }
        else
            temp=temp+expression[i];
    }
    array.push(temp);
    
    getPriority([1,2,3],0,3);

    var result = setCalculate(array);
    return result;
}

function getPriority(arr, n, k){
    if(n==arr.length-1){
        const str = arr.slice(0,k).join("");
        if(!priority.includes(str))
            priority.push(str);
        return;
    }
    else{
        for(let i = n; i<arr.length; i++){
            let temp = arr[n];
            arr[n]=arr[i];
            arr[i]=temp;
            getPriority(arr, n+1, k);
            arr[i]=arr[n];
            arr[n]=temp;
        }
        return priority;
    }
}

function setCalculate(arr){
    var result=[];
    for(var i=0; i<priority.length; i++){
        var array = arr.slice();
        for(var j=1; j<=3; j++){
            switch(priority[i].indexOf(j)){
                case 0: array = calculate('+',array); break;
                case 1: array = calculate('-',array); break;
                case 2: array = calculate('*',array); break;
            }
        }
        result.push(Math.abs(parseInt(array)));
    }
    result.sort(function(a,b){
        return b-a;
    })
    return result[0];
}

function calculate(op, array){
    var index = array.indexOf(op);
    while(index!=-1){
        var result = getResult(parseInt(array[index-1]),parseInt(array[index+1]),op);
        array[index+1]=result.toString();
        array = new Array(...array.slice(0,index-1),...array.slice(index+1));
        index = array.indexOf(op);
    }
    return array;
}
    
function getResult(a, b, op){
    if(op=='+')
        return a+b;
    else if(op=='-')
        return a-b;
    else if(op=='*')
        return a*b;
} 
