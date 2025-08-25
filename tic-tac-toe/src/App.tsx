import Background from './components/Background';
import { FieldContainer, InformationContainer } from './components/';
import { useEffect, useState } from 'react';
function App() {
  const [currentPlayer, setCurrentPLayer] = useState<'X' | 'O'>('X');
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);
  const [isReset, setIsReset] = useState(false);

  useEffect(() => {
    if (isGameEnded && !field.includes('')) {
      setIsDraw(true);
    }
  }, [isGameEnded]);

  const setFieldArr = (arr: string[], nextMark: 'X' | 'O') => {
    setField(arr);
    setCurrentPLayer(nextMark);
  };

  const setIsEnd = (isDraw: boolean, isEnd: boolean) => {
    setIsDraw(isDraw);
    setIsGameEnded(isEnd);
  };

  const resetGame = () => {
    setCurrentPLayer('X');
    setIsGameEnded(false);
    setIsDraw(false);
    setField(['', '', '', '', '', '', '', '', '']);
    setIsReset(!isReset);
  };

  return (
    <>
      <Background>
        <InformationContainer
          isEnd={isGameEnded}
          isDraw={isDraw}
          currentMark={currentPlayer}
        />
        <FieldContainer
          field={field}
          setFieldArr={setFieldArr}
          currentMark={currentPlayer}
          isDraw={isDraw}
          isEnd={isGameEnded}
          setIsEnd={setIsEnd}
          reset={isReset}
        />
        <button
          className="btn btn-xl btn-secondary btn-soft"
          onClick={resetGame}
        >
          Начать заново
        </button>
      </Background>
    </>
  );
}

export default App;
