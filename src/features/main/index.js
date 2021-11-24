import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title: 'Icecream Social - Home',
};


export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        changeTitle: (state, action) => {
            state.title = "Icecream Social - " + action.payload;
        },
    }
});

export const { changeTitle } = mainSlice.actions;

export const selectTitle = (state) => state.main.title;

export default mainSlice.reducer;