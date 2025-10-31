import { Component } from 'react';
type Props = {
  isEnd: boolean;
  isDraw: boolean;
  currentMark: 'X' | 'O';
};

export default class InformationLayout extends Component<Props> {
  render() {
    const { isEnd, isDraw, currentMark } = this.props;
    return (
      <div className="font-bold text-3xl ">
        {isDraw ? (
          'Ничья'
        ) : isEnd ? (
          <span>
            Победа:{' '}
            <b
              className={currentMark === 'X' ? 'text-blue-600' : 'text-red-600'}
            >
              {currentMark}
            </b>
          </span>
        ) : (
          `Ходит: ${currentMark}`
        )}
      </div>
    );
  }
}
