import React, { Component } from 'react';

import Vote from './Vote.js';
import './App.css';

class App extends Component {
  onVote(note) {
    alert(note);
  }

  render() {
    return (
      <div className="App">
        <Vote nbStars={5} onNote={this.onVote.bind(this)}/>
        <Vote nbStars={5} onNote={this.onVote.bind(this)}/>
      </div>
    );
  }
}

export default App;
