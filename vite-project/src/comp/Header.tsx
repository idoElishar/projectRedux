
import React from 'react';
import { useSelector } from 'react-redux';
import { CounterState } from '../app/Slice';

function Header() {
    const selectedAnimal = useSelector((state: CounterState) => state.anotherAnimal.value);
    return (
        <h2> animal: {selectedAnimal}</h2>
    );
}

export default Header;
