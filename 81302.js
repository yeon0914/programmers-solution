function solution(places) {
    var answer = [];
    for(var i=0; i<5; i++){
        var place=places[i];
        
        var table = new Array(5);
        for(var j=0; j<5; j++)
            table[j]=new Array(5);
        
        answer[i]=solve(place,table);
    }
    
    return answer;
}

function solve(place, table){
    for(var j=0; j<5; j++){
        for(var k=0; k<5; k++){
            if(place[j][k]=='P'){
                if(table[j][k]=='N') return 0;
                if(k+1<5){
                    if(place[j][k+1]=='X') table[j][k+1]='X';
                    else{
                        table[j][k+1]='N';
                        if(k+2<5){
                            if(place[j][k+2]=='X') table[j][k+2]='X';
                            else table[j][k+2]='N';
                        }
                    }
                }
                if(j+1<5){
                    if(place[j+1][k]=='X') table[j+1][k]='X';
                    else{
                        table[j+1][k]='N';
                        if(j+2<5){
                            if(place[j+2][k]=='X') table[j+2][k]='X';
                            else table[j+2][k]='N';
                        }
                    }
                }
                if(j+1<5 && k+1<5){
                    if(place[j+1][k+1]=='X') table[j+1][k+1]='X';
                    else{
                        if(place[j+1][k]!='X' || place[j][k+1]!='X') 
                            table[j+1][k+1]='N';
                    }
                }
                if(k-1>=0){
                    if(place[j][k-1]=='X') table[j][k-1]='X';
                    else{
                        table[j][k-1]='N';
                        if(k-2>=0){
                            if(place[j][k-2]=='X') table[j][k-2]='X';
                            else table[j][k-2]='N';
                        }
                    }
                }
                if(j-1>=0){
                    if(place[j-1][k]=='X') table[j-1][k]='X';
                    else{
                        table[j-1][k]='N';
                        if(j-2>=0){
                            if(place[j-2][k]=='X') table[j-2][k]='X';
                            else table[j-2][k]='N';
                        }
                    }
                }
                if(j-1>=0 && k+1<5){
                    if(place[j-1][k+1]=='X') table[j-1][k+1]='X';
                    else{
                        if(place[j-1][k]!='X' || place[j][k+1]!='X') table[j-1][k+1]='N';
                    }
                }
                if(j+1<5 && k-1>=0){
                    if(place[j+1][k-1]=='X') table[j+1][k-1]='X';
                    else{
                        if(place[j+1][k]!='X' || place[j][k-1]!='X') table[j+1][k-1]='N';
                    }
                }
                if(j-1>=0 && k-1>=0){
                    if(place[j-1][k-1]=='X') table[j-1][k-1]='X';
                    else{
                        if(place[j-1][k]!='X' || place[j][k-1]!='X') table[j-1][k-1]='N';
                    }
                }
            }
        }
    }
    return 1;
}
