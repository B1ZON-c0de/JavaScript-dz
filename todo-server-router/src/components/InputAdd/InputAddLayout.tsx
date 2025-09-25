interface IProps {
  inputVal: string;
  btnDisabled: boolean;
  handlerInput: (val: string) => void;
  handleButton: () => void;
}

const InputAddLayout = ({
  inputVal,
  handlerInput,
  handleButton,
  btnDisabled,
}: IProps) => {
  return (
    <div className="flex justify-between  gap-3">
      <input
        type="text"
        value={inputVal}
        className="input focus:outline-0 w-full items-center text-lg font-semibold"
        placeholder="Добавить задачу..."
        onChange={(e) => handlerInput(e.target.value)}
      />
      <button
        className="btn btn-info text-lg font-semibold"
        disabled={btnDisabled}
        onClick={handleButton}
      >
        Добавить
      </button>
    </div>
  );
};

export default InputAddLayout;
