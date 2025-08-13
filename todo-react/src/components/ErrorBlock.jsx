import style from './ErrorBlock.module.css';
const ErrorBlock = () => {
  return (
    <div className={style.error}>
      Введенное значение должно содержать минимум 3 символа
    </div>
  );
};

export default ErrorBlock;
