// 树的算法
// 要去掌握二叉树
//解析html
// 引入第三方包解析css
// npm init -y
// npm install css
// css string ->css om
// 文本节点没有考虑
const css = require('css');
let htmlStr = `<html>
<head>
<style>

</style>
</head>
<body>
  <img />
  <div class="cls" id="myid"> </div>
</body>
</html>`
// 由于之前没写css的逻辑，所以把css放在另一个模板字符串里
let cssStr = `
.cls{
    font-size:16px
}
#myid{
    background-color: red;

}


`
// 怎么得到解析后的规则，写法可看文档 npmjs.com查找css
let rules = css.parse(cssStr).stylesheet.rules;
console.log(JSON.stringify(rules,null,2));
let currentAttribute = null;
let currentToken = null;
// // 1.{type: 'document',children: [
// //    { type : 'startTag',tagName:'html',children": [
//         {"type": "startTag", "tagName": "head"}，
//         {"type": "startTag","tagName": "body"}

// ]}
// ]},
// 2. 

// }],


// 栈，内置document节点
let stack = [{type:'document' ,children: []} ]
let tree = {type:'document',children: [] }
// 要先声明再解析？不然报错？
parse(htmlStr);
// 不用序列化，children里的值展不开，会显示【Arrary]
console.log(JSON.stringify(stack[0],null,2));
// 序列化，第一个参数是要序列化的值，第二个参数是
function emit(token){
    console.log(token);
   // 获取栈顶元素，栈顶就是数组的最后一项
   let top = stack[stack.length-1];
   if(token.type === 'startTag'){
      let element = {
         type:'element',
         children:[],
         attributes:token.attributes,
         tagName: token.tagName
      }
      stack.push(element);
      // 遇到开始标签，就入栈
      // stack.push(token);//这个应该是把currenttoken放到栈的第二个元素，第三个元素，第四个.........用于匹配结束标签时，将开始标签出栈
      // 同时，把它作为栈顶元素的子节点
      // if(!top.children) top.children = [];
      top.children.push(element);
      //栈顶元素的子节点，第一次栈顶元素为document,其子节点为第一个要放进栈里的元素---html，所以是{type:'document' ,children: ["type": "startTag", "tagName": "html"]}，此时栈顶元素变为了html，那么栈顶元素的子节点变成了下一个要入栈的元素，也就是head,之前的代码写了，没有children节点就添加children节点，于是变为，{type:'document' ,children: ["type": "startTag", "tagName": "html"，"children":[{"type":"startTag","tagName"："head"}]]},接下来由于下一个元素是head的结束标签，所以head从 stack.push(token)中出栈，于是此刻栈顶元素仍然是html，那么下一个元素是body的开始标签，继续放到当前栈顶元素的子节点中，以此类推。这段代码最终可以在栈的第一个元素中形成一棵dom树
      
      // top.children.push 的token和 stack.push()的token 同时指向同一个引用地、、址，所以
      // top.children.push加了children以后，在stack.push的token里面也会加一个children?????/,
      // 因为是先将元素入栈，再将入栈元素作为栈顶元素的子节点的。那么在dom树里，加了children，，但是入栈元素(stack.push)有和dom树里一样的节点，那些节点也是栈顶元素，所以也要加children
      // 关于children可以看一下当前文件夹里的图片表示，一个地方加了children，其他地方也会加children,因为入栈出栈那里有栈顶元素，做dom树的stack[0]那里也有栈顶元素，它们两个的元素是重复的，在所有栈顶元素那里都会加children,所以入栈出栈那里的children会重复？但没关系，最后出栈都会删除的。
   }else if(token.type === 'endTag' ){
      if(token.tagName !== top.tagName)//为防止只写了开始标签，没写结束标签,或者有的标签属于单个标签不需要写结束标签的情况
      {
           throw new Error('TAGNAME match error') //如果要处理应该怎么处理呢
      }else{
      stack.pop();
   }
      // 遇到结束标签，就把栈顶与之匹配的结束标签出栈
   }
   else if(token.type === 'selfCloseToken'){
      let element = {
         type:'element',
         children:[],
         attributes:token.attributes,
         tagName: token.tagName
      }
      top.children.push(element);
   }
   currentToken = null;//?
}
// function emit(token){
//    console.log(token);
//    currentToken = null;
// }
function parse(htmlString){
   state = start;
   for(let c of htmlString){
      state = state(c);
   }
}
function start(c){
   if(c ==='<'){
      return tagOpen
   }else{
      return start;
   }
}

function tagOpen(c){
   if(c === '/'){

      return endTagOpen

   }else if(c.match(/^[a-zA-Z]$/)){
      currentToken = {
         type:'startTag',
         tagName:c
      }
      return tagName
   }
}
function tagName(c){
   if(c.match(/[a-zA-Z]/)){
      currentToken.tagName += c;
      return tagName;
   }else if(c==='>'){
      emit(currentToken);
      return start;

   }else if(c.match(/[\t\n\f ]/)){//自闭合标签，类似<img class="img" id ="ha"/>可能会遇到空白符
      return BeforeAttributeName;
   }
   
}
function BeforeAttributeName(c){
   if(c === '/'){
      // 走到这一步如果遇到斜杠，则说明这个标签是自闭合标签
      // 因为此时已经走过tagopne里的else if(c.match(/^[a-zA-Z]$/)){ currentToken = {type:'startTag', tagName:c }和tagname里面if(c.match(/[a-zA-Z]/)){currentToken.tagName += c;return tagName;｝这一步了，所以已经有currenttoken了
      currentToken.type = 'selfCloseToken';
      return tagName;//把emit提交的逻辑还是交给tagname
   }else if(c.match(/[a-zA-Z]/)){
    //    空格后有字母，说明是属性（属性名，属性值）
     currentAttribute = {
         name: c,
         value: ''
     }
     return attributeName

   }else if(c.match(/[\t\n\f ]/)){
       return BeforeAttributeName;
         
}else if(c === ">"){
    // 走到这里,说明一个节点的属性已经结束了.要把它提交了
    // 函数不加括号，意味着当前状态下的c已经处理完毕，到tagName处理的就是当前字符的下一个字符。
    // 函数加括号(c),说明当前这个c还没处理完毕，要让函数去处理，处理完当前这个，再处理下一个。
    return tagName(c);

}

}
function attributeName(c){
    if(c.match(/[a-zA-Z]/)){
        currentAttribute.name += c;
        return attributeName;
    }else if (c === '='){
        // 属性名： class="ab"，所以判断属性名有没有拼接完的依据是，有没有遇到等号
        return attributeValue;

    }
    

}
function attributeValue(c){
    // 属性值有可能是单引号，这没处理
    // 可以用布尔值判断是前双引号还是后双引号？？？？
    if(c === '\"'){
        return attributeValue;
    }
    else if(c.match(/[a-zA-Z]/)){
        currentAttribute.value += c;
        return attributeValue;
        // 当遇到后双引号的时候，说明属性值拼接完毕了。""
    }else  {
        // 可能会碰到空格或者>等，当前这个c既不是字母也不是引号，可能是空格或者>,把当前这个c交给beforeattributename去处理
        //   \表示转义符，不加在里面会报错
        // currentAttribute是属于currentToken的
        if(!currentToken.attributes) currentToken.attributes = [];
        currentToken.attributes.push(currentAttribute);
        currentAttribute = null;
        // 函数名后加小括号和不加小括号的区别
        // 下一行代码表示本状态内部处理完毕了这个c，下一个状态也要针对c 处理
        return BeforeAttributeName(c);
        // 如果是return BeforeAttributeName表示本状态内部已经处理完毕了这个c，下一个状态beforeattributename处理到的字符就是c的后一个字符，指当前这个c被消耗了
    }
}
function endTagOpen(c){
   if(c.match(/[a-zA-Z]/)){
      currentToken = {
         type:'endTag',
         tagName : c
      }
      return tagName;
   }


}