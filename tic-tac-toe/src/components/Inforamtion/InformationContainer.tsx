import InformationLayout from "./InformationLayout";

type Props = {
  isEnd: boolean;
  isDraw: boolean;
  currentMark: "X" | "O";
  winner: "" | "X" | "O";
};

export const InformationContainer = ({
  isEnd,
  isDraw,
  currentMark,
  winner,
}: Props) => {
  const displayMark = isEnd && winner ? winner : currentMark;

  return (
    <InformationLayout
      isEnd={isEnd}
      isDraw={isDraw}
      currentMark={displayMark}
    />
  );
};
