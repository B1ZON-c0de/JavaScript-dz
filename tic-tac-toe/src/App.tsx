import Background from "./components/Background";
import { FieldContainer, InformationContainer } from "./components/";
import { resetGame } from "./store/actions";
import { useStore } from "./hooks/useStore.ts";
import { store } from "./store/store.ts";

function App() {
  const handleReset = () => {
    store.dispatch(resetGame());
  };

  const state = useStore();

  return (
    <>
      <Background>
        <InformationContainer
          isEnd={state.isGameEnded}
          isDraw={state.isDraw}
          currentMark={state.currentPlayer}
          winner={state.winner}
        />
        <FieldContainer
          field={state.field}
          currentMark={state.currentPlayer}
          isDraw={state.isDraw}
          isEnd={state.isGameEnded}
        />
        <button
          className="btn btn-xl btn-secondary btn-soft"
          onClick={handleReset}
        >
          Начать заново
        </button>
      </Background>
    </>
  );
}

export default App;
