function solution(s) {
    var answer = [];
 
    var temp = s.split('{').join('.').split('}').join('.').split('.');
    var object={};
    
    for(var i=0; i<temp.length; i++){
        if(temp[i].length==0)
            continue;
        var temp2 = temp[i].split(',');
        for(var j=0; j<temp2.length; j++){
            if(temp2[j].length==0)
              continue;
            if(object[temp2[j]])
                object[temp2[j]]++;
            else
                object[temp2[j]]=1;
        }
    }
    
    var sortable=[];
    for(var item in object){
        sortable.push([item, object[item]]);
    }
    
    sortable.sort(function(a,b){
        return b[1]-a[1];
    })
    
    for(var i=0; i<sortable.length; i++)
        answer.push(parseInt(sortable[i][0]));
    return answer;
}
