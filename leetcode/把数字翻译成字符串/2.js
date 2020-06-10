const translateNum = (num) => {
    const str = num.toString()
    const n = str.length
    const memo = new Array(n)
    memo[n - 1] = 1   
    memo[n] = 1       
    const dfs = (str, pointer, memo) => {
      if (memo[pointer]) return memo[pointer] 
      const temp = Number(str[pointer] + str[pointer + 1])
      if (temp >= 10 && temp <= 25) { 
        memo[pointer] = dfs(str, pointer + 1, memo) + dfs(str, pointer + 2, memo)
      } else { 
        memo[pointer] = dfs(str, pointer + 1, memo)
      }
      return memo[pointer] 
    }
    return dfs(str, 0, memo) 
  }
  

  