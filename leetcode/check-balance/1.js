let isAns
var isBalanced = function(root) {
    isAns = true
    dfs(root)
    return isAns
};

function dfs(root){
    if(!root) return 0
    let left = dfs(root.left),
        right = dfs(root.right)

    if(Math.abs(left - right) > 1) isAns = false
    return Math.max(left, right) + 1
}
