import FieldLayout from "./FieldLayout";
import { store } from "../../store/store";
import { makeMove } from "../../store/actions";
import { useAppSelector } from "../../hooks/useStore.ts";

export const FieldContainer = () => {
  const field = useAppSelector((state) => state.field);
  const isEnd = useAppSelector((state) => state.isGameEnded);
  const isDraw = useAppSelector((state) => state.isDraw);
  const handleField = (idx: number) => {
    if (field[idx] === "" && !isEnd && !isDraw) {
      store.dispatch(makeMove(idx));
    }
  };

  return <FieldLayout handleField={handleField} field={field} />;
};
