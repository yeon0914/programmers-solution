function solution(record) {
    var user = {};
    var answer = [];
    var count=0;
    for(var i=0; i<record.length; i++){
        var temp = record[i].split(" ");
        
        if(temp[0]==="Enter"){
            user[temp[1]]=temp[2];
            answer.push(temp[1]+"님이 들어왔습니다.")
        }
        else if(temp[0]==="Leave"){
            answer.push(temp[1]+"님이 나갔습니다.")
        }
        else if(temp[0]==="Change"){
            user[temp[1]]=temp[2];
        }
    }

    var answer2=[]
    for(var i=0; i<answer.length; i++){
        var temp = answer[i].split("님");
        answer2.push(user[temp[0]]+"님"+temp[1]);
    }
    
    return answer2;
}
 
