const {add,mius} = require('./math')
// require导入，export导出
// let result = add(3,7);
// let expected = 10;
// if(result !== expected){
//     throw new Error('3+7=10');
// }

// let result1 = minus(3,7);
// let expected = -4;
// if(result1 !== expected){
//     throw new Error('3-7=-4');
// }

// 封装
 function expect(result){
     return{
         toBe: function(value){
             if(result !== value){
                 throw new Error('预期值和真实值不一样')
             }
         }
     }
 }
// expect(mius(3,7)).toBe(-4);
// expect(add(3,7)).toBe(10);
// // expect传入真实值，toBe传入预期结果



function test(desc,fn){
   try{
       fn();
       console.log(`${desc}通过`)

   }catch(err){
    console.log(`${desc}不通过`)

   }
}
// 把有可能出错的代码放在try,catch里，可以保证出错的代码不影响其他正常代码的执行

test('测试加法',()=>{
    expect(add(3,7)).toBe(10);
})
test('测试减法',()=>{
    expect(mius(3,7)).toBe(-4);
})