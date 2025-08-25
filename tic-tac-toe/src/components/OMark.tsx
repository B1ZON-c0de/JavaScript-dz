import { Circle } from 'lucide-react';
import { marks } from '../game.config';
export const OMark = () => {
  return (
    <>
      <Circle
        size={marks.size}
        strokeWidth={marks.strokeWidth}
        color={marks.circleColor}
        className="mix-blend-overlay opacity-80"
      />
    </>
  );
};
