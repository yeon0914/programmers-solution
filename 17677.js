function solution(str1, str2) {
    var answer = 0;
    
    str1=str1.toLowerCase();
    str2=str2.toLowerCase();
    
    var set1=[];
    for(var i=0; i<str1.length-1; i++){
        if((str1[i]>='a'&&str1[i]<='z')&&(str1[i+1]>='a'&&str1[i+1]<='z')){
            set1.push(str1[i]+str1[i+1]);
        }
    }
    set1.sort();
    console.log(set1)
    
    var set2=[];
    for(var i=0; i<str2.length-1; i++){
        if((str2[i]>='a'&&str2[i]<='z')&&(str2[i+1]>='a'&&str2[i+1]<='z')){
            set2.push(str2[i]+str2[i+1]);
        }
    }
    set2.sort();
    console.log(set2)
    
    
    //set1=[1,1,1,2,2];
    //set2=[1,1,2,2,2];
    if(!set1.length && !set2.length){
        return 1*65536;
    }
    var p1=0;   //set1 index
    var p2=0;   //set2 index
    
    var union=set1.length+set2.length;
    var inter=0;
    for(p1=0; p1<set1.length; p1++){
        for(var j = p2; j< set2.length; j++){
            if(set1[p1]==set2[j]){
                inter++; p2=j+1; break;
            }
        }
    }
    
    union= union-inter;
    console.log(union, inter)
    return parseInt((inter*65536/union));
}
