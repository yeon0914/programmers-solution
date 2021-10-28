function solution(progresses, speeds) {
    var answer = [];
    
    var day = [];
    var daycount=0;
    var pcount=0;
    for(var i=0; i<progresses.length; i++){
        day.push(Math.ceil((100-progresses[i])/speeds[i]))
        if (i==0)
            daycount=day[i];
        if(day[i]<=daycount){
            pcount=pcount+1;
        }
        else{
            answer.push(pcount);
            pcount=1;
            daycount=day[i];
        }
    }
    answer.push(pcount);
       
    
    return answer;
}
 
