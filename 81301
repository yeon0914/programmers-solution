function solution(s) {
    var answer = 0;
    
    for(var i=0; i<s.length; i++){
        switch(s[i]){
            case 'z':
                answer=answer*10+0; //zero
                i=i+3;
                break;
            case 'o':
                answer=answer*10+1; //one
                i=i+2;
                break;
            case 't':
                if(s[i+1]==='w'){
                    answer=answer*10+2; //two
                    i=i+2;
                }
                else{
                    answer=answer*10+3; //three
                    i=i+4;
                }
                break;
            case 'f':
                if(s[i+1]==='o'){
                    answer=answer*10+4; //four
                    i=i+3;
                }
                else{
                    answer=answer*10+5; //five
                    i=i+3;
                }
                break;
            case 's':
                if(s[i+1]==='i'){
                    answer=answer*10+6; //six
                    i=i+2;
                }
                else{
                    answer=answer*10+7; //seven
                    i=i+4;
                }
                break;
            case 'e':
                answer=answer*10+8; //eight
                i=i+4;
                break;
            case 'n':
                answer=answer*10+9; //nine
                i=i+3;
                break;
            default: 
                answer=answer*10+parseInt(s[i]);
                break;
        }
    }
    
    return answer;
}
