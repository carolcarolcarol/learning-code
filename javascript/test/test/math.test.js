const {add,mius} = require('../math')

test('测试加法',()=>{
    expect(add(3,7)).toBe(10);
})
test('测试减法',()=>{
    expect(mius(3,7)).toBe(-4);
})

// 用npx jset执行