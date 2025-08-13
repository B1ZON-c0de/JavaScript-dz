import { useState } from 'react';
import styles from './App.module.css';
import data from './data.json';

const App = () => {
  const steps = [...data];
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Инструкция по готовке пельменей</h1>
        <div className={styles.steps}>
          <div className={styles.stepsContent}>
            {steps[activeIndex - 1].content}
          </div>
          <ul className={styles.stepsList}>
            {steps.map((el, idx) => (
              <li
                className={`${styles.stepsItem} ${
                  activeIndex === idx + 1 && styles.active
                } ${idx + 1 < activeIndex && styles.done}`}
                key={el.id}
              >
                <button
                  className={styles.stepsItemButton}
                  onClick={(e) => {
                    setActiveIndex(Number(e.target.innerText));
                  }}
                >
                  {Number(el.id)}
                </button>
                {el.title}
              </li>
            ))}
          </ul>
          <div className={styles.buttonsContainer}>
            <button
              className={styles.button}
              onClick={() => {
                setActiveIndex(activeIndex - 1);
              }}
              disabled={activeIndex === 1 ? true : false}
            >
              Назад
            </button>
            {activeIndex === steps.length ? (
              <button
                className={styles.button}
                onClick={() => setActiveIndex(1)}
              >
                Начать сначача
              </button>
            ) : (
              <button
                className={styles.button}
                onClick={() => {
                  setActiveIndex(activeIndex + 1);
                }}
              >
                Дальше
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
