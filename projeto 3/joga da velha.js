const board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';

function makeMove(index) {
    if (board[index] === '') {
        board[index] = currentPlayer;
        if (checkWinner()) {
            alert(`${currentPlayer} ganhou!`);
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    return winningCombinations.some(combination => {
        return combination.every(index => board[index] === currentPlayer);
    });
}

// Função para reiniciar o jogo
function resetGame() {
    board.fill('');
    currentPlayer = 'X';
}

// A interface gráfica pode ser feita com HTML e CSS
