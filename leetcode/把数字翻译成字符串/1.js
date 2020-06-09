const translateNum = (num) => {
    const str = num.toString()     
    const dfs = (str, pointer) => {           
      if (pointer >= str.length - 1) return 1 
      const temp = Number(str[pointer] + str[pointer + 1])
      if (temp >= 10 && temp <= 25) {         
        return dfs(str, pointer + 1) + dfs(str, pointer + 2) 
      } else {                                    
        return dfs(str, pointer + 1)         
      }
    }
    return dfs(str, 0) 
  }
  
  