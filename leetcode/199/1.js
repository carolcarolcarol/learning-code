var rightSideView = function(root) {
    if(!root) return []
    let queue = [root]                       
    let arr = []                              
    while(queue.length > 0){
      let len = queue.length
      while (len) {
        let node = queue.shift()               
        if(len === 1) arr.push(node.val)      
        if(node.left) queue.push(node.left)    
        if(node.right) queue.push(node.right)
        len--
      }
    }
    return arr
  };
  