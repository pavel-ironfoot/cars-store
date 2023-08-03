import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { itemsArray } from "../common/data";

interface cardsState {
    cards: { id: number, title: string, picture: string, price: number }[];
    cars: { id: number, title: string, picture: string, price: number }[];
    searchCars: { id: number, title: string, picture: string, price: number }[];
}
const initialState: cardsState = {
    cards: [],
    cars: itemsArray,
    searchCars: itemsArray,
}
const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        updateCars(state, action) {
            state.cards = action.payload;
        },
        updateSearchCars(state, action) {
            state.searchCars = action.payload;
        },
        addCard(state, action) {
            state.cards.push(action.payload)
        },
        deleteCurrentCard(state, action: PayloadAction<number>) {
            const index = action.payload;
            state.cards = state.cards.filter((_, i) => i !== index);
        },
        deleteAllCars(state,) {
            state.cards = [];
        },
    }
});

export default cardsSlice.reducer;
export const { addCard, deleteCurrentCard, updateCars, deleteAllCars, updateSearchCars } = cardsSlice.actions;