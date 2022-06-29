function solution(jobs) {
    let length = jobs.length;
    const sortJobs = jobs.sort(function(a,b){
        if(a[1]>b[1]) return 1;
        else return -1;
    })
    
    let answer = 0;
    let current = 0;
    
    while(sortJobs.length){
        let index = 0;
        let min = Infinity;
        let minIndex = 0;
        for(index = 0; index<sortJobs.length; index++){
            if(sortJobs[index][0]<=current) break;
            if(sortJobs[index][0]<min){
                min = sortJobs[index][0];
                minIndex = index;
            }
        }
        if(index===sortJobs.length){
            answer += sortJobs[minIndex][1];
            current = sortJobs[minIndex][0]+sortJobs[minIndex][1];
            sortJobs.splice(minIndex,1)
        }else{
            answer += current-sortJobs[index][0]+sortJobs[index][1];
            current += sortJobs[index][1];
            sortJobs.splice(index, 1);
        }
    }

    return Math.floor(answer/length);
}
