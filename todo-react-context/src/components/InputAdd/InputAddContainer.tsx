import { useState } from 'react';
import InputAddLayout from './InputAddLayout';
import { useTodos } from '../../hooks/contextHooks/useTodos';

const InputAddContainer = () => {
  const [inputVal, setInputVal] = useState('');
  const btnIsDisabled = inputVal.trim() === '';

  const { addTodo } = useTodos();

  const handlerInput = (val: string) => {
    setInputVal(val);
  };
  const handleButton = () => {
    addTodo(inputVal);
    setInputVal('');
  };
  return (
    <InputAddLayout
      inputVal={inputVal}
      handlerInput={handlerInput}
      handleButton={handleButton}
      btnDisabled={btnIsDisabled}
    />
  );
};

export default InputAddContainer;
