// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to check for a win
function checkWin() {
    for (let condition of conditions) {
        const [a, b, c] = condition;
        if (cells[a] !== '' && cells[a] === cells[b] && cells[a] === cells[c]) {
            return cells[a];
        }
    }
    return null;
}

// Function to check for a draw
function checkDraw() {
    return cells.every(cell => cell !== '');
}

// Function to update the game state and check for a win or draw
function ticTacToe(btn, index) {
    if (cells[index] === '' && !checkWin() && !checkDraw()) {
        cells[index] = currentPlayer;
        btn.textContent = currentPlayer;
        btn.disabled = true;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        const winner = checkWin();
        if (winner) {
            result.textContent = 'Player ${winner} wins!';
        } else if (checkDraw()) {
            result.textContent = "It's a draw!";
        }
        else {
            result.textContent = 'Player ${currentPlayer} Turn';
        }
    }
}

function ticTacToe(btn, index) {
    if (cells[index] === '' && !checkWin() && !checkDraw()) {
        cells[index] = currentPlayer;
        btn.textContent = currentPlayer;
        btn.disabled = true;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        const winner = checkWin();
        if (winner) {
            result.textContent = 'Player ${winner} wins!';
        } else if (checkDraw()) {
            result.textContent = "It's a draw!";
        }
        else {
            result.textContent = 'Player ${currentPlayer} Turn';
        }
    }
}


// Event listeners for each button
btns.forEach((btn, index) => {
    
    btn.addEventListener('click', () => ticTacToe(btn, index));
});

// Reset the game
function resetGame() {
    cells = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    result.textContent = '';
    btns.forEach(btn => {
        btn.textContent = '';
    });
}

// Event listener for the reset button
document.querySelector('#reset').addEventListener('click', resetGame);
