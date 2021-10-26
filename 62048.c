#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

long long solution(long long w, long long h) {
    long long answer = 1;
    
    long long small;
    long long s, b;
    if(w<=h){
        small = w;
        s=w;
        b=h;
    }
    else{
        small = h;
        s=h;
        b=w;
    }
    
    long long t=1;
    for(long long i=2; i<=small;){
        if((s%i==0)&&(b%i==0)){
            t=t*i;
            s=s/i;
            b=b/i;
        }
        else
            i++;
    }
    

    answer = w*h-(w+h-t);
    return answer;
}
