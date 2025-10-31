export interface GameState {
    field: string[];
    currentPlayer: 'X' | 'O';
    isGameEnded: boolean;
    isDraw: boolean;
    winner: '' | 'X' | 'O';
}

export const initialState: GameState = {
    field: ['', '', '', '', '', '', '', '', ''],
    currentPlayer: 'X',
    isGameEnded: false,
    isDraw: false,
    winner: ''
};