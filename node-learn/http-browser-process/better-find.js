function match(string){
    let state = start;
    for(let c of string){
        state = state(c);
        // 状态始终接受一个字符，对这个字符进行判断，进行状态转移
    }
    return state === end;
}


function start(char){
    if(char==='a'){
        return foundA;
    }else{
        return start
    }
}

function foundA(char){
    if(char ==='b'){
        return foundB
    }else{
        return start;
    }
}


function foundB(c){
    if(c ==='c'){
        return end 
    }
    else{
        return start;
    }
}

function end(){
    return end;
}
console.log(match('i ab c ii'))