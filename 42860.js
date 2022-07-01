function solution(name) {
    let index=[];
    var answer = 0;
    
    let length=name.length;
    let count = name.length-1;
    
    for(let i=0; i<name.length; i++){
        answer+= Math.min('Z'.charCodeAt(0)-name[i].charCodeAt(0)+1,name[i].charCodeAt(0)-'A'.charCodeAt(0));
        
        let index = i + 1;
        while(index < length && name[index] === 'A'){
            index++;
        }
        
        count = Math.min(count, i * 2 + length - index);
        count = Math.min(count, (length - index) * 2 + i);
    }
    
    return answer+count;
}
