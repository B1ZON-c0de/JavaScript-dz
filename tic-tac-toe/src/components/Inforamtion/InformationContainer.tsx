import { useEffect, useRef } from 'react';
import InformationLayout from './InformationLayout';

type Props = {
  isEnd: boolean;
  isDraw: boolean;
  currentMark: 'X' | 'O';
};

export const InformationContainer = ({ isEnd, isDraw, currentMark }: Props) => {
  const prevMark = useRef<'X' | 'O'>(currentMark);

  useEffect(() => {
    if (!isEnd) {
      prevMark.current = currentMark;
    }
  }, [currentMark, isEnd]);

  return (
    <>
      <InformationLayout
        isEnd={isEnd}
        isDraw={isDraw}
        currentMark={isEnd ? prevMark.current : currentMark}
      />
    </>
  );
};
