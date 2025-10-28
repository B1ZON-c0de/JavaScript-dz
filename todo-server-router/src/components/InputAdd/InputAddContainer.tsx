import { useState } from "react";
import InputAddLayout from "./InputAddLayout";
import { useAppDispatch } from "../../hooks/storeHooks.ts";
import { addTodo } from "../../store/todoThunk.ts";

const InputAddContainer = () => {
  const [inputVal, setInputVal] = useState("");
  const btnIsDisabled = inputVal.trim() === "";

  const dispatch = useAppDispatch();

  const handlerInput = (val: string) => {
    setInputVal(val);
  };
  const handleButton = () => {
    dispatch(addTodo(inputVal));
    setInputVal("");
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
