// script.js

document.addEventListener('DOMContentLoaded', function () {
    const cells = document.querySelectorAll('.cell');
    const resetButton = document.getElementById('resetButton');
    let currentPlayer = 'X';
    let moves = 0;

    cells.forEach(cell => {
        cell.addEventListener('click', function () {
            if (!cell.textContent) {
                cell.textContent = currentPlayer;
                moves++;
                if (checkWin(currentPlayer)) {
                    alert(currentPlayer + ' wins!');
                    resetGame();
                } else if (moves === 9) {
                    alert('It\'s a draw!');
                    resetGame();
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        });
    });

    resetButton.addEventListener('click', resetGame);

    function checkWin(player) {
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6] // diagonals
        ];

        return winConditions.some(condition => {
            return condition.every(index => {
                return cells[index].textContent === player;
            });
        });
    }

    function resetGame() {
        cells.forEach(cell => {
            cell.textContent = '';
        });
        currentPlayer = 'X';
        moves = 0;
    }
});
