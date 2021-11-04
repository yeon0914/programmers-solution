class Node {
    constructor(dir){
        this.dir = dir;
        this.up_in = false;
        this.up_out = false;
        this.down_in = false;
        this.down_out = false;
        this.left_in = false;
        this.left_out = false;
        this.right_in=false;
        this.right_out=false;
    }
}


function solution(grid) {
    var table = new Array(grid.length);

    for(var i=0; i<grid.length; i++){
        table[i]=new Array(grid[0].length);
        for(var j=0; j<grid[0].length; j++){
            table[i][j]=new Node(grid[i][j]);
        }
    }

    var answer = [];
    var findi=0;
    while(1){
        var start = findStart(table, findi);
        if(start[0]==-1)
            break;

        var curi = start[1];
        var curj = start[2];
        findi = start[1];
        //console.log(start, findi)
        var length = 0;
        while(1){
            if(start[0]=="up"){
                if(table[curi][curj].up_out==true){
                    if(length!=0){
                        answer.push(length);
                        break;
                    }
                }
                table[curi][curj].up_out=true;
                curi--;
                length++;
                if(curi<0)
                    curi=table.length-1;
                if(table[curi][curj].down_in==true){
                    if(length!=0){
                        answer.push(length);
                        break;
                    }
                }
                table[curi][curj].down_in=true;

                if(table[curi][curj].dir=="S")
                    start[0]="up";
                else if(table[curi][curj].dir=="L")
                    start[0]="left";
                else
                    start[0]="right";
            }
            if(start[0]=="down"){
                if(table[curi][curj].down_out==true){
                    if(length!=0){
                        answer.push(length);
                        break;
                    }
                }
                table[curi][curj].down_out=true;
                length++;
                curi++;

                if(curi>table.length-1)
                    curi=0;

                if(table[curi][curj].up_in==true){
                    if(length!=0){
                        answer.push(length);
                        break;
                    }
                }
                table[curi][curj].up_in=true;

                if(table[curi][curj].dir=="S")
                    start[0]="down";
                else if(table[curi][curj].dir=="L")
                    start[0]="right";
                else
                    start[0]="left";
            }
            if(start[0]=="right"){
                if(table[curi][curj].right_out==true){
                    if(length!=0){
                        answer.push(length);
                        break;
                    }
                }
                table[curi][curj].right_out=true;
                length++;
                curj++;

                if(curj>table[0].length-1)
                    curj=0;

                if(table[curi][curj].left_in==true){
                    if(length!=0){
                        answer.push(length);
                        break;
                    }
                }
                table[curi][curj].left_in=true;

                if(table[curi][curj].dir=="S")
                    start[0]="right";
                else if(table[curi][curj].dir=="L")
                    start[0]="up";
                else
                    start[0]="down";
            }
            if(start[0]=="left"){
                if(table[curi][curj].left_out==true){
                    if(length!=0){
                        answer.push(length);
                        break;
                    }
                }
                length++;
                table[curi][curj].left_out=true;
                curj--;

                if(curj<0)
                    curj=table[0].length-1;

                if(table[curi][curj].right_in==true){
                    if(length!=0){
                        answer.push(length);
                        break;
                    }
                }
                table[curi][curj].right_in=true;

                if(table[curi][curj].dir=="S")
                    start[0]="left";
                else if(table[curi][curj].dir=="L")
                    start[0]="down";
                else
                    start[0]="up";
            }
        }
    }

    answer.sort(function(a,b){return a-b;});
    return answer;
}

function findStart(table, findi){
    for(var i=findi; i<table.length; i++){
        for(var j=0; j<table[0].length; j++){
           // console.log(i, j)
            if(table[i][j].up_out==false)
                return ["up",i, j];
            else if(table[i][j].down_out==false)
                return ["down",i, j];
            else if(table[i][j].left_out==false)
                return ["left",i, j];
            else if(table[i][j].right_out==false)
                return ["right",i, j];
        }
    }
    return [-1];
}
