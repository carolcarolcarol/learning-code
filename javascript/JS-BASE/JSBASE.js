let a=1
let b = 1
let c = [1]
let d = [1]
let e = {}
let g = {}
console.log(a == c)
console.log(c == d,c===d)
//c==d,c===d为什么为false?
// 凡是复杂数据类型，也就是object（引用）类型，以e,g为例，虽然同为
// ｛｝类型，但是存储在两个不同地方，这就意味着c,d,还有e,f都是指向不同地址的
// 地址不一样导致，两个等号或者三个等号判断时都不相等

//两个等号判断相等时，会把两个值换成相同类型转换
//三个等号判断相等时，不会进行隐式类型转换