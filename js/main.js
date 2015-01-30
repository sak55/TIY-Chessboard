function print(board) {
    var head = ["<th></th>","<th>A</th>","<th>B</th>","<th>C</th>","<th>D</th>","<th>E</th>","<th>F</th>","<th>G</th>","<th>H</th>","<th></th>"],
        cell = "<td class='blackqueen'></td>",
        row = "<tr></tr>";
    
    document.write('<table>');

    document.write("<thead>");
    document.write(head);
    document.write("</thead>");
            
    _.times(8, function(){
        document.write("<tr class='oddrow'>");
        _.times(10, function(){
            document.write(cell);});
        document.write("</tr>");});
    
    document.write("<thead>");
    document.write(head);
    document.write("</thead>");
    
    document.write('</table>');
}

print();

    
//function print(board){
//    console.log(board.join('\n') + '\n\n')
//    
//    _.forEach(board, [])
//}
//
//function move(fromY, fromX, toY, toX){
//    board[toY][toX] = board[fromY][fromX];
//    board[fromY][fromX] = ' ';
//
//    //    console.log(board.join('\n'));
//        print(board);
//    }
//print(board);
//console.log('<p class="rook"></p>');
    
//Turn your print(board) function into a toString(board) function that returns String rather than logging it. Replace the outerHTML of #chessboard with the result of toString(board) and ditch all that HTML!

//var board0 = [
//    [' ','A','B','C','D','E','F','G','H',' '],
//    ['8','R','N','B','Q','K','B','N','R','8'],
//    ['7','P','P','P','P','P','P','P','P','7'],
//    ['6',' ',' ',' ',' ',' ',' ',' ',' ','6'],
//    ['5',' ',' ',' ',' ',' ',' ',' ',' ','5'],
//    ['4',' ',' ',' ',' ',' ',' ',' ',' ','4'],
//    ['3',' ',' ',' ',' ',' ',' ',' ',' ','3'],
//    ['2','p','p','p','p','p','p','p','p','2'],
//    ['1','r','n','b','q','k','b','n','r','1'],
//    [' ','A','B','C','D','E','F','G','H',' ']];
//
//
//
//function print(board0){
//    console.log(board.join('\n') + '\n\n')
//}
//
//function move(fromY, fromX, toY, toX){
//        board0[toY][toX] = board0[fromY][fromX];
//        board0[fromY][fromX] = ' ';
//
//    //    console.log(board.join('\n'));
//        print(board0);
//    }
//
//
//print(board0);
//
//var board = [
//    ['<div class="container"><table><thead><th></th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th><th>G</th><th>H</th><th></th></thead>'],
//    [''],
//    [''],
//    [''],
//    [''],
//    [''],
//    [''],
//    [''],
//    [''],
//    ['<thead><th></th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th><th>G</th><th>H</th><th></th></thead>'],
//    ['</table></div>']
//]
//     


//
//<html>
//  <body>
//    <table id="chessboard-kinda">
//      <thead>
//        <tr>
//          <td></td>
//          <th> a </td>
//          <th> b </td>
//          <th> c </td>
//          <th> d </td>
//          <th> e </td>
//          <th> f </td>
//          <th> g </td>
//          <th> h </td>
//        </tr>
//      </thead>
//      <tbody>
//        <tr>
//          <th> 1 </th>
//          <td class="piece"> R </td>
//          <td class="piece"> N </td>
//          <td class="piece"> B </td>
//          <td class="piece"> Q </td>
//          <td class="piece"> K </td>
//          <td class="piece"> B </td>
//          <td class="piece"> N </td>
//          <td class="piece"> R </td>
//        </tr>
//      </tbody>
//    </table>
//    <script src="//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js"></script>
//    <script>
//
//      var table = document.body.children[0],
//          thead = document.body.children[0].children[0],
//          tbody = document.body.children[0].children[1];
//
//      console.assert(table.tagName == 'TABLE');
//      console.assert(thead.tagName == 'THEAD');
//      console.assert(tbody.tagName == 'TBODY');
//
//      var chessboard = document.getElementById('chessboard-kinda');
//
//      console.assert(chessboard === table);
//      // Shouldn't these be the same?
//
//      // Getting all the rows...
//      //
//      var rows = document.getElementsByTagName('tr');
//      // All the `<tr>` tags...
//
//      console.assert(rows.length === 2);
//      // 1 `<tr>` in `<thead>` + 1 `<tr>` in `<tbody>`
//
//      // Getting the row that is a child of `<tbody>`...
//      var bodyRow = _.find(rows, { 'parentElement': tbody });
//
//      console.assert(bodyRow === tbody.firstChild);
//      // Those should be the same, too, right?
//
//      // Getting some elements via `getElementByClassName`
//      var cells = document.getElementsByClassName('piece');
//
//      console.assert(cells.length === 9);
//      // 1 `<td>` in `<thead>` + 8 `<tr>` in `<tbody>`
//
//      // Getting the `<td>`'s that are children of `<tbody>`
//      var pieces = _.filter(cells, { 'parentElement': bodyRow });
//
//      console.assert(pieces.length === 8);
//    </script>
//  </body>
//</html>


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
