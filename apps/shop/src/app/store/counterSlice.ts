import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        subtract: (state, action: PayloadAction<number>) => {
            state.value -= action.payload;
        },
        multiply: (state, action: PayloadAction<number>) => {
            state.value *= action.payload;
        },
        reset: (state) => {
            state.value = 0;
        }
    },
});

export const { add, subtract, multiply, reset } = counterSlice.actions;

export default counterSlice.reducer;
