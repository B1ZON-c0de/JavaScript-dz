import { X } from 'lucide-react';
import { marks } from '../game.config';
import { Component } from 'react';

export class XMark extends Component {
  render() {
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
  }
}
