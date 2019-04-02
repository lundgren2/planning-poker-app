import React, { Component } from 'react';
import GameStarted from './GameStarted';

class Game extends Component {
  state = {
    started: false,
  };

  render() {
    return (
      <div>
        <GameStarted />
      </div>
    );
  }
}
export default Game;
