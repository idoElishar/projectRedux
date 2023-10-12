
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
    anotherAnimal: {
        value: string;
    };
}

const initialState: CounterState = {
    anotherAnimal: {
        value: 'animal',
    },
};

const counterSlice = createSlice({
    name: 'anotherAnimal',
    initialState,
    reducers: {
        setDog: (state) => {
            state.anotherAnimal.value = 'dog';
        },
        setCat: (state) => {
            state.anotherAnimal.value = 'cat';
        },
        setWolf: (state) => {
            state.anotherAnimal.value = 'wolf';
        },
        setLion: (state) => {
            state.anotherAnimal.value = 'Lion';
        },
        setLeopard: (state) => {
            state.anotherAnimal.value = 'Leopard';
        },
        setFox: (state) => {
            state.anotherAnimal.value = 'Fox';
        },
        setAnotherAnimal: (state, action: PayloadAction<string>) => {
            state.anotherAnimal.value = action.payload
        }
    },
});

export const { setDog, setCat, setWolf, setLion, setLeopard, setFox,setAnotherAnimal } = counterSlice.actions;

export default counterSlice.reducer;
