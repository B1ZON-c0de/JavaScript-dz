import InformationLayout from './InformationLayout';
import { Component } from 'react';
import { connect } from 'react-redux';
import type { RootState } from '../../store/store.ts';

interface Props {
  winner: string;
  isEnd: boolean;
  currentMark: string;
  isDraw: boolean;
}

class InformationContainer extends Component<Props> {
  render() {
    const { winner, isEnd, currentMark, isDraw } = this.props;
    const displayMark = (isEnd && winner ? winner : currentMark) as 'X' | 'O';
    return (
      <InformationLayout
        isEnd={isEnd}
        isDraw={isDraw}
        currentMark={displayMark}
      />
    );
  }
}

const mapStatechToProps = (state: RootState) => ({
  winner: state.winner,
  isEnd: state.isGameEnded,
  currentMark: state.currentPlayer,
  isDraw: state.isDraw,
});

export const Information = connect(mapStatechToProps)(InformationContainer);
