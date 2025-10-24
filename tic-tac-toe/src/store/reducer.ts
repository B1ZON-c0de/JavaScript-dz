import { type GameState, initialState } from "./state";
import { ACTION_TYPES } from "./actionTypes";
import { WIN_PATTERNS } from "../game.config";

type Action =
  | { type: typeof ACTION_TYPES.MAKE_MOVE; payload: { index: number } }
  | { type: typeof ACTION_TYPES.RESET_GAME }
  | {
      type: typeof ACTION_TYPES.SET_GAME_END;
      payload: { isDraw: boolean; isEnd: boolean };
    };

export const gameReducer = (
  state: GameState = initialState,
  action: Action,
): GameState => {
  switch (action.type) {
    case ACTION_TYPES.MAKE_MOVE: {
      if (state.isGameEnded || state.field[action.payload.index] !== "") {
        return state;
      }

      const newField = [...state.field];
      newField[action.payload.index] = state.currentPlayer;

      const playerMoves = newField
        .map((cell, index) => (cell === state.currentPlayer ? index : -1))
        .filter((index) => index !== -1);

      const isWinner = WIN_PATTERNS.some((pattern) =>
        pattern.every((index) => playerMoves.includes(index)),
      );

      const isDraw = !isWinner && !newField.includes("");

      if (isWinner) {
        return {
          ...state,
          field: newField,
          isGameEnded: true,
          winner: state.currentPlayer,
        };
      }

      if (isDraw) {
        return {
          ...state,
          field: newField,
          isGameEnded: true,
          isDraw: true,
        };
      }

      return {
        ...state,
        field: newField,
        currentPlayer: state.currentPlayer === "X" ? "O" : "X",
      };
    }

    case ACTION_TYPES.RESET_GAME:
      return initialState;

    case ACTION_TYPES.SET_GAME_END:
      return {
        ...state,
        isDraw: action.payload.isDraw,
        isGameEnded: action.payload.isEnd,
      };

    default:
      return state;
  }
};
