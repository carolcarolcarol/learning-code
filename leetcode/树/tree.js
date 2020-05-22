// 二叉树
// 深度优先遍历：前序（Root,left,right）-->每遇到一个子树都是这个顺序遍历，中序（left,Root,right），后序(left,right,root)
// 以百度百科二叉树那张图为例，
// 前序遍历如下：F,C,A,D,B,E,H,G,M
// 广度优先遍历：；一行一行遍历/一层一层遍历

let tree = {
    val:'F',
    left:{
        val:'C',
        left:{
            val:'A',
        },
        right:{
            val:'D',
        }
    },
    right:{
        val:'E'
    }
}
tree.left.left
// 子节点要从根节点一点一点获取