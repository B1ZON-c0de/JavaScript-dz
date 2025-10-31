import { Circle } from 'lucide-react';
import { Component } from 'react';
import { marks } from '../game.config';
export class OMark extends Component {
  render() {
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
  }
}
