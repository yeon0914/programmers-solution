function solution(id_list, report, k) {
    const idEnum = {};
    const userReport = Array.from(Array(id_list.length), () => Array(id_list.length).fill(0))
    for (var i=0; i<id_list.length; i++){
        idEnum[id_list[i]]=i;
    }
    const reportCount = Array.from(Array(id_list.length).fill(0));

    for(var i=0; i<report.length; i++){
        var temp = report[i].split(' ');
        if(!userReport[idEnum[temp[0]]][idEnum[temp[1]]]){
            userReport[idEnum[temp[0]]][idEnum[temp[1]]]++;
            reportCount[idEnum[temp[1]]]++;
        }
    }
    
    var answer = Array.from(Array(id_list.length).fill(0));
    for(var i=0; i<id_list.length; i++){
        for(var j=0; j<id_list.length; j++){
            if(userReport[i][j]){
                if(reportCount[j]>=k)
                    answer[i]++;
            }
        }
    }
    
    
    
    return answer;
}
