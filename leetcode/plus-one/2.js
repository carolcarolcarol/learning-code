var plusOne = function(digits) {
    let num = BigInt(digits.join(''));
    let string = String(num + 1n);
    let ary = string.split('');
    return ary.map(str => Number(str));
};

