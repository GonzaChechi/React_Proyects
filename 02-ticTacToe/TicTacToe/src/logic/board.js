import { WINNER_COMBOS } from "./Constant"

export const checkWinnerFrom = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        if (boardToCheck[a] &&
            boardToCheck[a] == boardToCheck[b] &&
            boardToCheck[a] == boardToCheck[c]) {
            return boardToCheck[a]
        }
    }
    //si no hay ganador
    return null
}

export const checkEndGame = (newBoard) => {
    //revisamos si todas las posiciones del tablero estan ocupadas
    //si todas (every) las posiciones de newBoard distintas de null entonces termina el juego
    return newBoard.every((square) => square != null)
  }