import FieldLayout from "./FieldLayout";
import { store } from "../../store/store";
import { makeMove } from "../../store/actions";

type Props = {
  field: string[];
  currentMark: "X" | "O";
  isDraw: boolean;
  isEnd: boolean;
};

export const FieldContainer = ({ field, isDraw, isEnd }: Props) => {
  const handleField = (idx: number) => {
    if (field[idx] === "" && !isEnd && !isDraw) {
      store.dispatch(makeMove(idx));
    }
  };

  return <FieldLayout handleField={handleField} field={field} />;
};
