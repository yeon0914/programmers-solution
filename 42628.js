class Node{
    constructor(data,prev,next){
        this.data = data;
        this.prev = prev;
        this.next= next;
    }
}

class PriorityQueue{
    constructor(){
        this.head = null;
        this.rear = null;
        this.size= 0;
    }
    size(){
        return this.size;
    }
    enqueue(value){
        if(this.head===null){
            let node = new Node(value, null,null);
            this.head=node;
            this.rear=node;
            this.size++;
        }else{
            if(this.head.data>value){
                let node = new Node(value,null,this.head);
                this.head.prev=node;
                this.head=node;
                this.size++;
                return;
            }
            let temp = this.head;
            while(temp.next){
                if(temp.data<value)
                    temp=temp.next;
                else break;
            }
            let node = new Node(value,temp,temp.next);
            if(temp.next===null){
                this.rear=node;
            }
            temp.next=node;
            this.size++;
        }
    }
    dequeueMin(){
        if(!this.size) return;
        this.head=this.head.next;
        if(this.head!==null) this.head.prev=null;
        this.size--;
    }
    dequeueMax(){
        if(!this.size) return;
        this.rear=this.rear.prev;
        if(this.rear!==null) this.rear.next=null;
        this.size--;
    }
    getMin(){
        return this.head.data;
    }
    getMax(){
        return this.rear.data;
    }
}

function solution(operations) {
    let queue = new PriorityQueue();
    
    for(let i=0; i<operations.length; i++){
        let operation = operations[i].split(" ");
        
        if(operation[0]==='I') queue.enqueue(operation[1]*1);
        else if(operation[0]==='D'&&operation[1]==='1') queue.dequeueMax();
        else queue.dequeueMin();
    }
    
    if(!queue.size) return[0,0];
    
    return [queue.getMax(),queue.getMin()];
}
