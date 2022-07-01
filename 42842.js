function solution(brown, yellow) {
    var answer = [];
    let a = 3;
    let b = (brown+4)/2-a;
    while(a<=b){
        if((a-2)*(b-2)===yellow) break;
        a++;
        b = (brown+4)/2-a;
    }
    
    return [b,a];
}
