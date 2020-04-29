/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


//  //反转链表-迭代法
// var reverseList = function(head) {
//     let [cur,pre] = [head,null]; // cur指向当前位置，pre指向当前位置之前的位置。
//     //把head指针指向的位置赋给cur,即当前cur指针指向的位置为head指针指向的位置
//     //让pre指针指向null，因为反转形式为：将1->2->3->4->null,反转为：Null<-1<-2<-3<-4
//     //那么反转之后，cur指针最初指向的1，其next为NULL
//     while(cur){
//         let tmp = cur.next;  //tmp临时存储，当前指针下一个指向的对象，头结点head不动，移动和头结点指向同一个位置的cur，
//         //即当前指针，由于cur指针是移动的，所以应提前存储好其下一指向节点的位置。
//         cur.next = pre; //当前指针指向的下一个位置为当前指针的前一位，因为链表反转，比如最开始，当前指针cur指向1
//         // ，那么1的后一位指向的是pre，而pre的初始值是Null,即第一次变动：null<-1
//         pre = cur;//再移动pre ,即当前指针的前一个指针，pre指向cur，而根据上一行代码，当前cur指针指向1
//         //那么根据pre=cur;,此时pre指向1
//         cur = tmp; //最后移动cur,将cur指针移向之前保存的---cur移动之前的位置的后一位，即tmp，在第一轮的举例中
//         //tmp应该等于2
//         //那么退出本次循环的条件为：while(cur)，即当cur为空值的时候，比如当cur=null时，终止循环，反转链表完成。
//     }
//     return pre;

// };




for(var i=0;i<5;i++)
{console.log(i);}
