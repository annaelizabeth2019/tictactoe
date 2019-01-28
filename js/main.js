//first I need a board 9 x 9 array?
//2 I need to establish if it is X's turn or O's (maybe to start just start with X every time)
//I need to listen for the clicks of each player
//2 I need an X to show up when a square is clicked on X's turns
//3 I need an O to show up when a square is clicked on O's turns
//4 I need the player turns to alternate from X to O
//5 I need to track the position of x and o
//6 I need to know when one of the players wins
//I need to display a congrats message to the winner
//I need to know when the board is full
//I need to display a draw message if the board is full
//I need to render the board at the end of every turn

/*----- app's state (variables) -----*/ 

let board;
let turn = 'X';
    
/*----- cached element references -----*/ 

const squares = Array.from(document.querySelectorAll('#board div'));

/*----- event listeners -----*/ 
document.getElementById('board').addEventListener('click', handleMove);

/*----- functions -----*/
    
function init() {
    board = [
        '', '', '', 
        '', '', '',
        '', '', '' 
    ];
    turn = 'X'
    turn = turn === 'X' ? 'O' : 'X';
    render();
};

function handleMove(evt) {
    let idx = squares.findIndex(function(square) {
        return square === evt.target;
    });
    board[idx] = turn;
    console.log(idx);
    render();
};

function render() {
    board.forEach(function(val, idx) {
        //this moves the value of the board item into the squares[idx]
        squares[idx].textContent = val;
    });
};


init();