import { ACTION_TYPES } from './actionTypes';

export const makeMove = (index: number) => ({
    type: ACTION_TYPES.MAKE_MOVE,
    payload: { index }
});

export const resetGame = () => ({
    type: ACTION_TYPES.RESET_GAME
});

export const setGameEnd = (isDraw: boolean, isEnd: boolean) => ({
    type: ACTION_TYPES.SET_GAME_END,
    payload: { isDraw, isEnd }
});