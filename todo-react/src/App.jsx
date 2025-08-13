import style from './App.module.css';
import AddButton from './components/AddButton';
import ButtonInput from './components/ButtonInput';
import { useState } from 'react';
import ErrorBlock from './components/ErrorBlock';
import { format } from 'date-fns';

let id = 0;
const TIME_FORMAT = 'dd.MM.yyyy HH:mm:ss';

function App() {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const [error, setError] = useState(true);
  const [isBtnDisable, setIsBtnDisable] = useState(error);

  const handleValue = (data) => {
    setValue(data);
  };

  const handleError = (isValid) => {
    setError(!isValid);
    setIsBtnDisable(!isValid);
  };

  const addItem = () => {
    setList([
      ...list,
      {
        id: id++,
        text: value,
        time: format(new Date(), TIME_FORMAT),
      },
    ]);
    setValue('');
    setIsBtnDisable(true);
    console.log(id);
  };
  return (
    <>
      <h1 className={style.pageHeading}>Ввод значения</h1>
      <p className={style.noMarginText}>
        Текущее значение <code>value</code>: "
        <output className={style.currentValue}>{value}</output>"
      </p>
      {error && <ErrorBlock />}
      <div className={style.buttonsContainer}>
        <ButtonInput msg={handleValue} onErr={handleError} />
        <AddButton disabled={isBtnDisable} onAddItem={addItem} />
      </div>
      <div className={style.listContainer}>
        <h2 className={style.listHeading}>Список:</h2>
        {list.length ? (
          <ul className={style.list}>
            {list.map((el) => (
              <li className={style.listItem} key={el.id}>
                {el.text}, {el.time}
              </li>
            ))}
          </ul>
        ) : (
          <p className={style.noMarginText}>Нет добавленных элементов</p>
        )}
      </div>
    </>
  );
}

export default App;
