document.addEventListener("DOMContentLoaded", function () {
    const cells = document.querySelectorAll(".btn");
    const resultContainer = document.querySelector(".result");
    const resetButton = document.querySelector("#reset");
    let currentPlayer = "X";
    let gameOver = false;

    // Function to check for a win
    function checkWin() {
        const winCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const combination of winCombinations) {
            const [a, b, c] = combination;
            if (
                cells[a].value &&
                cells[a].value === cells[b].value &&
                cells[a].value === cells[c].value
            ) {
                return cells[a].value;
            }
        }

        return null;
    }

    // Function to check for a draw
    function checkDraw() {
        return [...cells].every((cell) => cell.value !== "");
    }

    // Function to handle a player's move
    // Function to handle a player's move
    function handleMove(cell) {
        if (!gameOver && cell.value === "") {
            cell.value = currentPlayer;
            cell.readOnly = true;
            currentPlayer = currentPlayer === "X" ? "O" : "X";

            // Update the text content of the clicked cell with the current player's symbol
            cell.innerText = currentPlayer;

            const winner = checkWin();
            if (winner) {
                resultContainer.textContent = `Player ${winner} wins!`;
                gameOver = true;
                resetButton.disabled = false;
            } else if (checkDraw()) {
                resultContainer.textContent = "It's a draw!";
                gameOver = true;
                resetButton.disabled = false;
            } else {
                resultContainer.textContent = `Current Player: ${currentPlayer}`;
            }
        }
    }


    // Add event listeners to the cells for handling player moves
    cells.forEach((cell) => {
        cell.addEventListener("click", () => handleMove(cell));
    });

    // Reset the game
    resetButton.addEventListener("click", () => {
        cells.forEach((cell) => {
            cell.value = "";
            cell.readOnly = false;
        });
        currentPlayer = "X";
        resultContainer.textContent = "Current Player: X";
        gameOver = false;
        resetButton.disabled = true;
    });
});
