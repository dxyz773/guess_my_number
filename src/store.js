import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./game_features/gameSlice";
export const store = configureStore({ reducer: { game: gameReducer } });
