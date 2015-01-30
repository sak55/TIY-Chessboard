//Turn your print(board) function into a toString(board) function that returns String rather than logging it. Replace the outerHTML of #chessboard with the result of toString(board) and ditch all that HTML!

var board = [
    ['R','N','B','Q','K','B','N','R'],
    ['P','P','P','P','P','P','P','P'],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p','p','p','p','p','p','p','p'],
    ['r','n','b','q','k','b','n','r'] ];

console.log(board.join('\n') + '\n\n');

// Move King's Pawn forward 2

board[4][4] = board[6][4];
board[6][4] = ' ';
console.log(board.join('\n'));


//Move Queen's Pawn forward 1
board[2][3] = board[1][3];
board[1][3] = ' ';
console.log(board.join('\n'));


//I am lord of the first two moves in chess

board[5][2] = board[7][1];
board[7][1] = ' ';
console.log(board.join('\n'));

//I don't know why it works but it does GO ME
