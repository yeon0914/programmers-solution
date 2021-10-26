class Stack{
    constructor(){
        this._arr=[];
    }
    push(item){
        this._arr.push(item);
    }
    pop(){
        return this._arr.pop();
    }
    peek(){
        if(this._arr.length==0)
            return "";
        return this._arr[this._arr.length-1];
    }
}


function solution(s){
    if(s%2==1)
        return 0;
    
    const stack = new Stack();
    stack.push(s[0]);
    for(var i=1; i<s.length; i++){
        if(stack.peek()===s[i]){
            stack.pop();
        }
        else{
            stack.push(s[i]);
        }
    }

    if(stack._arr.length==0)
        return 1;
    else
        return 0;
    
//     var temp=0;
//     for(var i=0; i+1<s.length; i++){
//         if(s[i]===s[i+1]){
//             var j=1;
//             while((i-j>=0)&&(i+j+1<s.length)){
//                 if(s[i-j]===s[i+1+j]){
//                     j++;
//                 }
//                 else{
//                     break;
//                 }
//             }
//             s=s.slice(0,i-j+1)+s.slice(i+j+1);
//             i=i-j-1;
//         } 
//     }
//     if(s.length==0)
//         answer=1;
    // return answer;
}
