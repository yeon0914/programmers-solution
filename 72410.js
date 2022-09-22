function solution(new_id) {
    new_id = new_id.toLowerCase();
    
    let id = "";
    for(let i=0; i<new_id.length; i++){
        if((new_id[i]>='a'&&new_id[i]<='z')||(new_id[i]>='0'&&new_id[i]<='9')||new_id[i]==='-'||new_id[i]==='_'||new_id[i]==='.'){
            id+=new_id[i];
        }
    }
    
    new_id=id;
    id="";
    for(let i=0; i<new_id.length; i++){
        if(new_id[i]==='.'){
            while(new_id[i]==='.') i++;
            i--;
        }
        id+=new_id[i];
    }
    
    while(id[0]==='.') id=id.slice(1);
    while (id[id.length-1]==='.') id=id.slice(0,-1);
    
    if(id.length===0) id="a";
    if(id.length>=16) id=id.slice(0,15);

    while (id[id.length-1]==='.') id=id.slice(0,-1);
    
    if(id.length===1) id=id[0]+id[0]+id[0];
    if(id.length===2) id=id+id[1];
    
    return id;
}
