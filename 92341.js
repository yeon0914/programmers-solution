function solution(fees, records) {
    var carIn = {};
    var carTime ={};
    var answer = [];
    
    for(var i=0; i<records.length; i++){
        var temp = records[i].split(' ');
        var time = temp[0].slice(0,2)*60+temp[0].slice(3,5)*1;
        if(temp[2]==="IN"){
            carIn[temp[1]]=time;
        }
        else{
            var usage = time-carIn[temp[1]];
            if(temp[1] in carTime)
                carTime[temp[1]]=carTime[temp[1]]+usage;
            else
                carTime[temp[1]]=usage;
            delete carIn[temp[1]];
        }
    }
    
    const carInArray = Object.entries(carIn);
    const lastTime = 23*60+59;
    for(var i=0; i<carInArray.length; i++){
        var usage = lastTime-carInArray[i][1];
        if(carInArray[i][0] in carTime)
            carTime[carInArray[i][0]]=carTime[carInArray[i][0]]+usage;
        else
            carTime[carInArray[i][0]]=usage;
    }
    
    const carTimeArray=Object.entries(carTime);
    var carFee=new Array(carTimeArray.length);
    for(var i=0; i<carTimeArray.length; i++){
        var fee = fees[1]*1;
        if(carTimeArray[i][1]>=fees[0]*1)
            fee = fee+ Math.ceil((carTimeArray[i][1]-(fees[0]*1))/fees[2])*fees[3];
        carFee[i]=[carTimeArray[i][0],fee]
    }
    
    var carFeeSort = carFee.sort(
        function(a,b){ 
            if(a[0] > b[0]) return 1;
            if(a[0] < b[0]) return -1;
        }
    );
    var answer = new Array(carFeeSort.length);
    for(var i=0; i<carFeeSort.length; i++)
        answer[i]=carFeeSort[i][1];
    
    return answer;
}
