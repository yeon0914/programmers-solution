function solution(info, query) {
    const database={};
    
    for(let i=0; i<info.length; i++){
        const temp = info[i].split(" ");
        if(database[[temp[0],temp[1],temp[2],temp[3]]]){
            database[[temp[0],temp[1],temp[2],temp[3]]].push(parseInt(temp[4]));
        }
        else
            database[[temp[0],temp[1],temp[2],temp[3]]]=[parseInt(temp[4])]
    }
    
    for(x in database)
        database[x].sort((a,b)=>a-b);
    
    let answer = [];
    for(let i=0; i<query.length; i++){
        let temp = query[i].split(" ");
        let search = [];
        
        if(temp[0]==='-'){
            search.push(['cpp'])
            search.push(['java']);
            search.push(['python']);
        }
        else{
            search.push([temp[0]]);
        }
        
        if(temp[2]==='-'){
            let tempSearch=[]
            for(let j=0; j<search.length; j++){
                tempSearch.push([...search[j],'backend']);
                tempSearch.push([...search[j],'frontend']);
            }
            search = tempSearch;
        }
        else{
            for(let j=0; j<search.length; j++){
                search[j]=[...search[j],temp[2]];
            }
        }
        
        if(temp[4]==='-'){
            let tempSearch=[]
            for(let j=0; j<search.length; j++){
                tempSearch.push([...search[j],'junior']);
                tempSearch.push([...search[j],'senior']);
            }
            search = tempSearch;
        }
        else{
            for(let j=0; j<search.length; j++){
                search[j]=[...search[j],temp[4]];
            }
        }
        
        if(temp[6]==='-'){
            let tempSearch=[]
            for(let j=0; j<search.length; j++){
                tempSearch.push([...search[j],'chicken']);
                tempSearch.push([...search[j],'pizza']);
            }
            search = tempSearch;
        }
        else{
            for(let j=0; j<search.length; j++){
                search[j]=[...search[j],temp[6]];
            }
        }
        
        let count=0;
        for(let j=0; j<search.length; j++){
            let tempDatabase = database[search[j]];
            if(!tempDatabase) continue;
            
            let start = 0;
            let end = tempDatabase.length-1;
            let mid = 0;
            let num = parseInt(temp[7]);
            
            while(start<end){
                mid = Math.floor((end+start)/2);
                if(tempDatabase[mid]>num){
                    end=mid-1;
                }
                else if(tempDatabase[mid]<num)
                    start=mid+1;
                else if(tempDatabase[mid]==num){
                    start = mid;
                    break;
                }
            }
            
            while(tempDatabase[start]>=num || start>=tempDatabase.length)
                start--;
            count+=tempDatabase.length-start-1;
        }
        answer.push(count)
    }
    return answer;
}
