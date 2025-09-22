import { useState } from 'react';
import InputAddLayout from './InputAddLayout';

interface IProps {
  addTodo: (val: string) => void;
}

const InputAddContainer = ({ addTodo }: IProps) => {
  const [inputVal, setInputVal] = useState('');
  const btnIsDisabled = inputVal.trim() === '';

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
