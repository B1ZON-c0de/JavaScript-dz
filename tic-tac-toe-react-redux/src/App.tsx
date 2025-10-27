import Background from "./components/Background";
import { FieldContainer, InformationContainer } from "./components/";
import { useAppDispatch } from "./hooks/useStore.ts";
import { resetGame } from "./store/actions.ts";

function App() {
  const dispatch = useAppDispatch();
  return (
    <>
      <Background>
        <InformationContainer />
        <FieldContainer />
        <button
          className="btn btn-xl btn-secondary btn-soft"
          onClick={() => dispatch(resetGame())}
        >
          Начать заново
        </button>
      </Background>
    </>
  );
}

export default App;
