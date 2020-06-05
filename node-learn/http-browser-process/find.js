// a 'l am good'
// 看着字符串里有没有a
function match(string){
    for(let char of string){
        if (char === 'ab'){
            return true;
        }
    }
    return false;
}
// 看看字符串里有没有ab
function match1(string){
    let foundA = false;
    for(let char of string){
        if (char === 'a'){
            foundA = true;
            console.log('zz')
        }else if(foundA && char === 'b'){
            return true;
            console.log('bb');
        }else{
            foundA = false;
        }
    }
    return false;
}
console.log(match1('i ab good'))
