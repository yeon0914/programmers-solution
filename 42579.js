function solution(genres, plays) {
    let genrePlayCount = {};
    for(let i=0; i<genres.length; i++){
        if(genrePlayCount[genres[i]]){
            genrePlayCount[genres[i]].count=genrePlayCount[genres[i]].count+plays[i];
            if(plays[genrePlayCount[genres[i]].index[0]]<plays[i]){
                genrePlayCount[genres[i]].index[1]=genrePlayCount[genres[i]].index[0];
                genrePlayCount[genres[i]].index[0]=i;
            }else if(genrePlayCount[genres[i]].index.length===1){
                genrePlayCount[genres[i]].index[1]=i;
            }else if(plays[genrePlayCount[genres[i]].index[1]]<plays[i]){
                genrePlayCount[genres[i]].index[1]=i;
            }
        }
        else
            genrePlayCount[genres[i]]={count : plays[i], index: [i]}
    }
    
    let answer=[];
    const newGenrePlayCount = Object.values(genrePlayCount);
    newGenrePlayCount.sort((a,b)=>{
        if(a.count>=b.count) return -1;
        else return 1;
    })
    
    for(let i=0; i<newGenrePlayCount.length; i++){
        answer.push(newGenrePlayCount[i].index[0]);
        if(newGenrePlayCount[i].index.length===2)
            answer.push(newGenrePlayCount[i].index[1]);
    }
    return answer;
}
