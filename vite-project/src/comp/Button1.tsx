import React from 'react';
import { useDispatch } from 'react-redux';
import { setDog, setWolf, setFox }  from '../app/Slice'

function Button1() {
  const dispatch = useDispatch();

  const handleSetDog = () => {
    dispatch(setDog());
  };

  const handleSetWolf = () => {
    dispatch(setWolf());
  };

  const handleSetFox = () => {
    dispatch(setFox());
  };

  return (
    <div>
      <button onClick={handleSetDog}>Dog</button>
      <br />
      <button onClick={handleSetWolf}>Wolf</button>
      <br />
      <button onClick={handleSetFox}>Fox</button>
    </div>
  );
}

export default Button1;
