import style from './Button.module.css';

const AddButton = ({ disabled, onAddItem }) => {
  return (
    <button className={style.button} disabled={disabled} onClick={onAddItem}>
      Добавить в список
    </button>
  );
};

export default AddButton;
