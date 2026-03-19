import { create } from 'zustand'

export type Player = 1 | 2;
export type Color = 'red' | 'yellow' | 'black' | null;
export type GameStatus = 'playing' | 'won_p1' | 'won_p2' | 'lost_p1' | 'lost_p2';

export interface GameState {
  gameKey: number;
  status: GameStatus;
  currentPlayer: Player;
  player1Color: Color;
  player2Color: Color;
  shotsRemaining: number;
  message: string;
  foul: (msg: string) => void;
  endTurn: (pottedValidColor: boolean) => void;
  assignColors: (pottedColor: 'red' | 'yellow', player: Player) => void;
  potBlack: (player: Player, isValidWin: boolean) => void;
  resetGame: () => void;
}

export const useGameStore = create<GameState>((set) => ({
  gameKey: 0,
  status: 'playing',
  currentPlayer: 1,
  player1Color: null,
  player2Color: null,
  shotsRemaining: 1,
  message: "Player 1 to break (Open Table)",

  foul: (msg: string) => set((state) => {
    if (state.status !== 'playing') return state;
    const nextPlayer = state.currentPlayer === 1 ? 2 : 1;
    const nextColor = nextPlayer === 1 ? state.player1Color : state.player2Color;
    return {
      currentPlayer: nextPlayer,
      shotsRemaining: 2,
      message: `FOUL: ${msg}. Player ${nextPlayer}'s Turn - 2 shots (${nextColor || 'Open Table'})`
    };
  }),

  assignColors: (pottedColor: 'red' | 'yellow', player: Player) => set((state) => {
    if (state.status !== 'playing' || state.player1Color) return state;
    
    const p1Color = player === 1 ? pottedColor : (pottedColor === 'red' ? 'yellow' : 'red');
    const p2Color = p1Color === 'red' ? 'yellow' : 'red';
    
    return {
      player1Color: p1Color,
      player2Color: p2Color,
      message: `Player ${player} is ${pottedColor}. Player ${player}'s Turn (${pottedColor})`
    };
  }),

  endTurn: (pottedValidColor: boolean) => set((state) => {
    if (state.status !== 'playing') return state;
    if (pottedValidColor) {
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
  }),

  potBlack: (player: Player, isValidWin: boolean) => set((state) => {
    if (state.status !== 'playing') return state;
    if (isValidWin) {
      return {
        status: player === 1 ? 'won_p1' : 'won_p2',
        message: `Player ${player} WINS!`
      };
    } else {
      // Foul on black = automatic loss
      const winner = player === 1 ? 2 : 1;
      return {
        status: player === 1 ? 'lost_p1' : 'lost_p2',
        message: `FOUL ON BLACK. Player ${player} LOSES. Player ${winner} WINS!`
      };
    }
  }),

  resetGame: () => set((state) => ({
    gameKey: state.gameKey + 1,
    status: 'playing',
    currentPlayer: 1,
    player1Color: null,
    player2Color: null,
    shotsRemaining: 1,
    message: "Player 1 to break (Open Table)"
  }))
}));
