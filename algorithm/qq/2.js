// 规则：
// 将第一个数删除，再将第二个数放到末尾，将第三个数删除，再将第四个数放到末尾，将第五个数删除，将第六个数放到末尾。直到最后一个数，将最后一个数也删除
// 删除的数连在一起就是我们要得到的结果。
let enc_qq=[6,3,1,7,5,8,9,2,4];
// console.log(enc_qq);  输出结果是object类型，object是对象的一种，是可以枚举的对象
// 数组里移除第一个元素，当前第二个元素放到末尾
qq=[];
head=0;//添加一个头指针
tail=9;
// while循环不满足条件就会退出
while(head<tail) {
   qq.push(enc_qq[head]);
   head++;
   enc_qq[tail]=enc_qq[head];
   tail++;
   head++;
}
console.log(qq.join(''));
// join() 方法用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的。

