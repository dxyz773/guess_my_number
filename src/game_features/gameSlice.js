import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  randomNumber: Math.trunc(Math.random() * 20) + 1,
  score: 20,
  highScore: 0,
  // status: win, lose, play
  gameStatus: "play",
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    checkNumber(state, action) {
      if (state.score > 0 && action.payload !== state.randomNumber) {
        state.score--;
      } else if (state.score > 0 && action.payload === state.randomNumber) {
        state.gameStatus = "win";
        if (state.score > state.highScore) {
          state.highScore = state.score;
        }
      } else if (state.score <= 0) {
        state.gameStatus = "lose";
      }
    },
    restart(state) {
      state.gameStatus = "play";
      state.score = 20;
      state.randomNumber = Math.trunc(Math.random() * 19) + 1;
    },
  },
});

export const { checkNumber, restart } = gameSlice.actions;

export default gameSlice.reducer;

export const getGameStatus = (state) => state.game.gameStatus;
export const getScore = (state) => state.game.score;
export const getHighScore = (state) => state.game.highScore;
export const getRandomNumber = (state) => state.game.randomNumber;
