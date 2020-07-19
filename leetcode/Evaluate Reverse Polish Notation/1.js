var evalRPN = function(tokens) {
    const map = {
        '*' : (a, b) => a * b,
        '/' : (a, b) => parseInt(a / b, 10),
        '+' : (a, b) => a + b,
        '-' : (a, b) => a - b
    }
    let fun = () => {
        let char = tokens.pop();
        if(map[char]){
            let num = fun();//由于减法和除法的存在顺序问题
            return map[char](fun(), num);
        }else{
            return parseInt(char, 10);
        }  
    }
    return fun();
};

