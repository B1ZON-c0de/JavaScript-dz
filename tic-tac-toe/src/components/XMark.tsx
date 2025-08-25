import { X } from 'lucide-react';
import { marks } from '../game.config';

export const XMark = () => {
  return (
    <>
      <X
        size={marks.size}
        strokeWidth={marks.strokeWidth}
        color={marks.crossColor}
        className="mix-blend-overlay opacity-80"
      />
    </>
  );
};
