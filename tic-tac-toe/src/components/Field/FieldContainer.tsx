import { WIN_PATTERNS } from '../../game.config';
import FieldLayout from './FieldLayout';
import { useEffect, useRef } from 'react';

type Props = {
  field: string[];
  setFieldArr: (arr: string[], nextMark: 'X' | 'O') => void;
  setIsEnd: (isDraw: boolean, isEnd: boolean) => void;
  currentMark: 'X' | 'O';
  isDraw: boolean;
  isEnd: boolean;
  reset: boolean;
};

export const FieldContainer = ({
  field,
  setFieldArr,
  currentMark,
  isDraw,
  isEnd,
  setIsEnd,
  reset,
}: Props) => {
  const arrX = useRef<number[]>([]);
  const arrO = useRef<number[]>([]);

  useEffect(() => {
    arrX.current = [];
    arrO.current = [];
  }, [reset]);

  const nextMark = currentMark === 'X' ? 'O' : 'X';

  const handleField = (idx: number) => {
    const newField = [...field];
    if (newField[idx] === '' && !isEnd && !isDraw) {
      newField[idx] = currentMark;
      setFieldArr(newField, nextMark);
    }

    if (currentMark === 'X') {
      arrX.current.push(idx);
    }

    if (currentMark === 'O') {
      arrO.current.push(idx);
    }

    WIN_PATTERNS.forEach((pattern) => {
      let win: boolean = false;

      if (currentMark === 'X') {
        win = pattern.every((el) => arrX.current.includes(el));
      } else {
        win = pattern.every((el) => arrO.current.includes(el));
      }
      if (win) {
        setIsEnd(false, true);
      }
    });
  };

  return <FieldLayout handleField={handleField} field={field} />;
};
