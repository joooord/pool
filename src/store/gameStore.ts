import { create } from 'zustand'

export type Player = 1 | 2;
export type Color = 'red' | 'yellow' | 'black' | null;

export interface GameState {
  currentPlayer: Player;
  player1Color: Color;
  player2Color: Color;
  shotsRemaining: number;
  message: string;
  foul: (msg: string) => void;
  endTurn: (pottedValidColor: boolean) => void;
  assignColors: (pottedColor: 'red' | 'yellow', player: Player) => void;
}

export const useGameStore = create<GameState>((set) => ({
  currentPlayer: 1,
  player1Color: null,
  player2Color: null,
  shotsRemaining: 1,
  message: "Player 1 to break (Open Table)",

  foul: (msg: string) => set((state) => {
    const nextPlayer = state.currentPlayer === 1 ? 2 : 1;
    const nextColor = nextPlayer === 1 ? state.player1Color : state.player2Color;
    return {
      currentPlayer: nextPlayer,
      shotsRemaining: 2,
      message: `FOUL: ${msg}. Player ${nextPlayer}'s Turn - 2 shots (${nextColor || 'Open Table'})`
    };
  }),

  assignColors: (pottedColor: 'red' | 'yellow', player: Player) => set((state) => {
    if (state.player1Color) return {}; // already assigned
    
    const p1Color = player === 1 ? pottedColor : (pottedColor === 'red' ? 'yellow' : 'red');
    const p2Color = p1Color === 'red' ? 'yellow' : 'red';
    
    return {
      player1Color: p1Color,
      player2Color: p2Color,
      message: `Player ${player} is ${pottedColor}. Player ${player}'s Turn (${pottedColor})`
    };
  }),

  endTurn: (pottedValidColor: boolean) => set((state) => {
    if (pottedValidColor) {
      // Valid pot keeps the turn. If 2 shots carry over, it stays 2 unless rules specify otherwise.
      // English 8-ball: potting on the first shot of a 2-shot carry keeps it at 2 shots? Actually you lose the free shot if you pot, but we'll keep it simple: pot a ball, keep your turn (always resetting to 1 shot remaining for normal play).
      const pColor = state.currentPlayer === 1 ? state.player1Color : state.player2Color;
      return {
        shotsRemaining: 1,
        message: `Player ${state.currentPlayer}'s Turn (${pColor || 'Open Table'}) - Potted valid ball!`
      };
    } else {
      const remaining = state.shotsRemaining - 1;
      if (remaining > 0) {
        const pColor = state.currentPlayer === 1 ? state.player1Color : state.player2Color;
        return {
          shotsRemaining: remaining,
          message: `Player ${state.currentPlayer}'s Turn (${pColor || 'Open Table'}) - 1 shot remaining`
        };
      } else {
        const nextPlayer = state.currentPlayer === 1 ? 2 : 1;
        const nextColor = nextPlayer === 1 ? state.player1Color : state.player2Color;
        return {
          currentPlayer: nextPlayer,
          shotsRemaining: 1,
          message: `Player ${nextPlayer}'s Turn (${nextColor || 'Open Table'})`
        };
      }
    }
  })
}));
