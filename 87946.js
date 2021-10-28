var Max=0;
function solution(k, dungeons) {
    var visit = new Array(dungeons.length);
    for(var i=0; i<visit.length; i++)
        visit[i]=false;
    
    for(var i=0; i<dungeons.length; i++){
        if(k>=dungeons[i][0]){
            dfs(visit,dungeons, i, k, 1);
        }
    }
    
    return Max;
}

function dfs(visit,dungeons, i, current, count){
    visit[i]=true;
    current = current-dungeons[i][1];
    for(var j=0; j<dungeons.length; j++){
        if(visit[j]==false && dungeons[j][0]<=current){
            dfs(visit, dungeons, j, current, count+1);
        }
    }
    if(Max<count)
        Max = count;
    visit[i]=false;
}
