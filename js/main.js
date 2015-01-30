//Turn your print(board) function into a toString(board) function that returns String rather than logging it. Replace the outerHTML of #chessboard with the result of toString(board) and ditch all that HTML!

var board0 = [
    [' ','A','B','C','D','E','F','G','H',' '],
    ['8','R','N','B','Q','K','B','N','R','8'],
    ['7','P','P','P','P','P','P','P','P','7'],
    ['6',' ',' ',' ',' ',' ',' ',' ',' ','6'],
    ['5',' ',' ',' ',' ',' ',' ',' ',' ','5'],
    ['4',' ',' ',' ',' ',' ',' ',' ',' ','4'],
    ['3',' ',' ',' ',' ',' ',' ',' ',' ','3'],
    ['2','p','p','p','p','p','p','p','p','2'],
    ['1','r','n','b','q','k','b','n','r','1'],
    [' ','A','B','C','D','E','F','G','H',' ']];



function print(board0){
    console.log(board.join('\n') + '\n\n')
}

function move(fromY, fromX, toY, toX){
        board0[toY][toX] = board0[fromY][fromX];
        board0[fromY][fromX] = ' ';

    //    console.log(board.join('\n'));
        print(board0);
    }


print(board0);
console.log('<p class="rook"></p>');

var board = [
    ['<div class="container"><table><thead><th></th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th><th>G</th><th>H</th><th></th></thead>'],
    [''],
    [''],
    [''],
    [''],
    [''],
    [''],
    [''],
    [''],
    ['<thead><th></th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th><th>G</th><th>H</th><th></th></thead>'],
    ['</table></div>']
]
            


function print(board){
    console.log(board.join('\n') + '\n\n')
}

function move(fromY, fromX, toY, toX){
    board[toY][toX] = board[fromY][fromX];
    board[fromY][fromX] = ' ';

    //    console.log(board.join('\n'));
        print(board);
    }


print(board);
console.log('<p class="rook"></p>');





//
//// Move King's Pawn forward 2
//
//board[4][4] = board[6][4];
//board[6][4] = ' ';
//console.log(board.join('\n'));
//
//
////Move Queen's Pawn forward 1
//board[2][3] = board[1][3];
//board[1][3] = ' ';
//console.log(board.join('\n'));
//
//
////I am lord of the first two moves in chess
//
//board[5][2] = board[7][1];
//board[7][1] = ' ';
//console.log(board.join('\n'));
//
////I don't know why it works but it does GO ME
//
//function changeElement(class) {
//  var el = document.getElementsByClassName(class);
//  el.style.color = "red";
//  el.style.fontSize = "15px";
//  el.style.backgroundColor = "#FFFFFF";
//}
