function solution(rows, columns, queries) {
    var answer = [];
    
    var table = new Array(rows);

    for (var i = 0; i < table.length; i++) {
        table[i] = new Array(columns);
    }
    
    var temp=1;
    for(var i=0; i<rows; i++){
        for(var j=0; j<columns; j++){
            table[i][j]=temp;
            temp++;
        }
    }
    
    for(var i=0; i<queries.length; i++){
        var x1=queries[i][0];
        var y1=queries[i][1];
        var x2=queries[i][2];
        var y2=queries[i][3];
        answer[i]=[x1,y1,x2,y2];
        
        
        var small=table[x1-1][y1-1];
        
        var p1 = table[x1-1][y2-1];
        for(var j=y2; j>y1; j--){
            if(table[x1-1][j-1]<small)
                small=table[x1-1][j-1];
            table[x1-1][j-1]=table[x1-1][j-1-1];
        }
        
        var p2=table[x2-1][y2-1];
        for(var j=x2; j>x1; j--){
            if(table[j-1][y2-1]<small)
                small=table[j-1][y2-1];
            table[j-1][y2-1]=table[j-1-1][y2-1];
        }
        table[x1+1-1][y2-1]=p1;

        var p3=table[x2-1][y1-1];
        for(var j=y1; j<y2; j++){
            if(table[x2-1][j-1]<small)
                small=table[x2-1][j-1];
            table[x2-1][j-1]=table[x2-1][j+1-1];
        }
        table[x2-1][y2-1-1]=p2;
        
        for(var j=x1; j<x2; j++){
            if(table[j-1][y1-1]<small)
                small=table[j-1][y1-1];
            table[j-1][y1-1]=table[j+1-1][y1-1];
        }
        table[x2-1-1][y1-1]=p3;
        
        
        answer[i]=small;
    }
    return answer; 
}
