import InformationLayout from "./InformationLayout";
import { useAppSelector } from "../../hooks/useStore.ts";

export const InformationContainer = () => {
  const winner = useAppSelector((state) => state.winner);
  const isEnd = useAppSelector((state) => state.isGameEnded);
  const currentMark = useAppSelector((state) => state.currentPlayer);
  const isDraw = useAppSelector((state) => state.isDraw);
  const displayMark = isEnd && winner ? winner : currentMark;

  return (
    <InformationLayout
      isEnd={isEnd}
      isDraw={isDraw}
      currentMark={displayMark}
    />
  );
};
