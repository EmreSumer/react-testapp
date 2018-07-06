import React, { Component } from 'react';
import './App.css';


import MovieContainer from "./containers/MovieContainer/index.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieContainer />
      </div>
    );
  }
}

export default App;
