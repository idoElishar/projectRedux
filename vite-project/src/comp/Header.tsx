
import React from 'react';
import { useSelector } from 'react-redux';
import { animalState } from '../app/Slice';

function Header() {
    const selectedAnimal = useSelector((state: animalState) => state.anotherAnimal.value);
    return (
        <h2> animal: {selectedAnimal}</h2>
    );
}

export default Header;
