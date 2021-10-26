class Node{
    constructor(item){
        this.item = item;
        this.next=null;
    }
}

class Queue{
    constructor(){
        this.head=null;
        this.tail=null
    }
    push(item){
        const node = new Node(item);
        if(this.head===null){
            this.head=node;
            this.head.next = this.tail;
        }
        else{
            this.tail.next=node;
        }
        this.tail=node;
    }
    
    pop(){
        const popedItem = this.head;
        this.head=this.head.next;
        return popedItem;
    }
}

function solution(numbers, target) {
    var answer = 0;
    var queue=new Queue();
    queue.push(numbers[0]);
    
    for(var i=1; i<numbers.length; i++){
        var count=2**(i-1);
        for(var j=0; j<count; j++){
            var temp = queue.pop();
            queue.push(temp.item-numbers[i]);
            queue.push(temp.item+numbers[i]);
        }
    }
    
    let current = queue.head;
    while(current){
        if((current.item===target)||current.item===-target){
            answer=answer+1;
        }
        current=current.next;
    }
    
    return answer;
}
