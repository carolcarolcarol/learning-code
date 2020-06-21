const offsetArr = [{x: -1, y: 0}, {x: 1, y: 0}, {x: 0, y: -1}, {x: 0, y: 1}];

const backTrace = (board, word, wordIndex, x, y) => {
    if (board[x][y] !== word[wordIndex]) return false;
    if (wordIndex === word.length - 1) return true;
    const temp = board[x][y]; 
    board[x][y] = 0;
    ++wordIndex;
    for (let i = 0; i < 4; ++i) {
        const x1 = offsetArr[i].x + x;
        const y1 = offsetArr[i].y + y;
        if (x1 >= 0 && x1 < board.length && y1 >= 0 && y1 < board[0].length && backTrace(board, word, wordIndex, x1, y1)) return true;
    }
    board[x][y] = temp; 
    return false;
}

var exist = function(board, word) {
    for (let i = 0; i < board.length; ++i) {
        for (let j = 0; j < board[0].length; ++j) {
            if (backTrace(board, word, 0, i, j)) return true;
        }
    }
    return false;
};
