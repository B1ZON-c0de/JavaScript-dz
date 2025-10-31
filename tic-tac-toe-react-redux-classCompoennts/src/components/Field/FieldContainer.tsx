import FieldLayout from './FieldLayout';
import { makeMove } from '../../store/actions';
import { Component } from 'react';
import { connect } from 'react-redux';
import type { RootState } from '../../store/store';

interface Props {
  field: string[];
  isEnd: boolean;
  isDraw: boolean;
  makeMove: (idx: number) => void;
}

class FieldContainer extends Component<Props> {
  render() {
    const { isDraw, isEnd, field, makeMove } = this.props;

    const handleField = (idx: number) => {
      if (field[idx] === '' && !isEnd && !isDraw) {
        makeMove(idx);
      }
    };
    return <FieldLayout handleField={handleField} field={field} />;
  }
}

const mapStateToProps = (state: RootState) => ({
  field: state.field,
  isEnd: state.isGameEnded,
  isDraw: state.isDraw,
});

const mapDispatchToProps = {
  makeMove,
};

export const Field = connect(
  mapStateToProps,
  mapDispatchToProps
)(FieldContainer);
