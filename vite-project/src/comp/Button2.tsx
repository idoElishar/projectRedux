import React from 'react';
import { useDispatch } from 'react-redux';
import { setCat, setLeopard, setLion } from '../app/Slice';

function Button2() {
    const dispatch = useDispatch();

    const handleSetCat = () => {
        dispatch(setCat());
    };

    const handleSetLeopard = () => {
        dispatch(setLeopard());
    };

    const handleSetLion = () => {
        dispatch(setLion());
    };

    return (
        <div>
            <button onClick={handleSetCat}>Cat</button>
            <br />
            <button onClick={handleSetLeopard}>Leopard</button>
            <br />
            <button onClick={handleSetLion}>Lion</button>
        </div>
    );
}

export default Button2;
