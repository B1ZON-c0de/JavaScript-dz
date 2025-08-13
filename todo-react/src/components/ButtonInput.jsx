import style from './Button.module.css';
import { validateText } from '../utils/validateText';

const ButtonInput = ({ msg, onErr }) => {
  const handleInputBtn = () => {
    const value = prompt();
    msg(value);
    onErr(validateText(value));
  };
  return (
    <button className={style.button} onClick={handleInputBtn}>
      Ввести новое
    </button>
  );
};

export default ButtonInput;
