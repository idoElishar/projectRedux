import React, { useState } from 'react';
import { setAnotherAnimal } from '../app/Slice'; 
import { useDispatch } from 'react-redux';

const Input: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [value1, setValue1] = useState<string>('');
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const changeValue = () => {
    setValue1(value);
    dispatch(setAnotherAnimal(value));
  };

  return (
    <div>
      <label htmlFor='animalInput'>Enter another animal:</label>
      <input onChange={handleChange} type='text' id='animalInput' value={value} />
      <button onClick={changeValue}>Submit</button>
    </div>
  );
};

export default Input;
