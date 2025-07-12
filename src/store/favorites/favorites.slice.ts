import { createSlice } from "@reduxjs/toolkit";

const LS_KEY = "favorites";

const getFavoritesFromLocalStorages = () => {
  const favorites = localStorage.getItem(LS_KEY);
  if (!favorites) return [];
  try {
    return JSON.parse(favorites);
  } catch (e) {
    console.error("error pasrsing favorites from LocalStorage: ", e);
    return [];
  }
};

const saveFavoritesToLocalStorage = (favorites: string[]) => {
  localStorage.setItem(LS_KEY, JSON.stringify(favorites));
};

const initialState: string[] = getFavoritesFromLocalStorages();

const favoriteSlice = createSlice({
  name: LS_KEY,
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
        saveFavoritesToLocalStorage(state);
      }
    },
    removeFavorite: (state, action) => {
      const newState = state.filter((id) => id !== action.payload);
      saveFavoritesToLocalStorage(newState);
      return newState;
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export const favoritesReducer = favoriteSlice.reducer;
