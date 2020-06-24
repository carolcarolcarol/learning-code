const users = [
    { id: 0, name: 'wxj', age: 18, sex: 'male'},
    {id: 1, name: 'john', age: 28, sex: 'male'},
    {id: 2, name: 'bob', age: 33, sex: 'male'},
    {id: 3, name: 'tom', age: 22, sex: 'male'},
    {id: 4, name: 'alice', age: 18, sex: 'female'},
    {id: 5, name: 'rihana', age: 35, sex: 'female'},
    {id: 6, name: 'sara', age: 20, sex: 'female'}

]
// 封装sql业务能力
// ES5 FUNCTION类
function SQL(table){
    this.table = table;//数据源
    this._result = null;//sql查询的结果一开始是为空的，它为什么要挂在this上成为对象的属性？中间变量 中间结果
    // this._result结果的保存变量 当下的结果保存，保存每一步的操作过后的结果
    this._getRows = function(){
        return this._result?this._result: this.table;
    }
}
// 通过方法抽象出来？
SQL.prototype.where = function(predicate){
   var rows = this._getRows();
   console.log(rows,';;;;');
   if(Array.isArray(rows)){
    //    没分组的话
       this._result = rows.filter(predicate)

   }else{
    //    分了组的话
    //    json object时，
    //  拿出每一个数组，再filter，最后返回的仍然是object
    console.log(Object.keys(rows));
    this._result = Object.keys(rows).reduce(function(groups,group){
         groups[group] = rows[group].filter(predicate);
         return groups
     },{})
   }
   this._result = rows.filter(predicate);
//    如果是数组就》。。。。。如果是对象就.......如何判断是否是一个数组

   console.log(this._result);
}
SQL.prototype.groupBy = function(key){
//    console.log(key);
    var rows = this._getRows();
    // 前面有_，私有方法，把数据一行一行拿出来
    // reduce遍历数组每一项，es6，
    // reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
    
// 参数	描述
// function(total,currentValue, index,arr)	必需。用于执行每个数组元素的函数。
// 函数参数:
// 参数	描述
// total	必需。初始值, 或者计算结束后的返回值。
// currentValue	必需。当前元素
// currentIndex	可选。当前元素的索引
// arr	可选。当前元素所属的数组对象。
// initialValue	可选。传递给函数的初始值

// 一个结果数组n 分组成 1个json object 1   -》reduce 
    this._result = rows.reduce(function(groups,row){
        // (初始值，当前元素)
    // reduce分组问题？
    // console.log(groups,row);
    // console 在数据前面会出现Undefined，因为没有返回值.
    var group = row[key];
    // console.log(row[key])
    if(!groups[group]){
        groups[group] = [];
    }
    // group[male]=[],group[female]=[]初始值
     groups[group].push(row);
    //  分组后把数据放进去,分为两组,group[male],group[female]
    //  往初始值里添加内容，row是当前元素，row[key]是当前元素的male,或者female属性
    
    return groups;
    
    // 把前一次的结果作为返回值
   
    },{});
     console.log(this._result);
    return this;
    // 为了后面的链式调用要return this??????????????//
    // 在函数后面写一个returnthis就可以实现链式调用，代码就可以接着GroupBy走向where;
}
SQL.prototype.getResult = function(){
    return this._result;
}
var sql = new SQL(users)
var predicate = function(row){
    // predicate条件
    // row 行 这里是指每一项
    return row.age < 30;
}
var result = sql.groupBy('sex').where(predicate).getResult();
console.log(result);
// 链式调用如何实现？
// 
