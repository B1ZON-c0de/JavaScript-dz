import Background from './components/Background';
import { Field, Information } from './components/';
import { resetGame } from './store/actions.ts';
import { Component } from 'react';
import { connect } from 'react-redux';

interface Props {
  resetGame: () => void;
}

class App extends Component<Props> {
  render() {
    return (
      <>
        <Background>
          <Information />
          <Field />
          <button
            className="btn btn-xl btn-secondary btn-soft"
            onClick={this.props.resetGame}
          >
            Начать заново
          </button>
        </Background>
      </>
    );
  }
}

const mapDispatchToProps = {
  resetGame,
};

export default connect(null, mapDispatchToProps)(App);
