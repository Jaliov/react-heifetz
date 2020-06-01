import React, { Component } from 'react';
import './App.css';
// import PhotoDsply from './Photo';
import Bio from './Bio';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Bio name='Jascha Heifetz' />
      </div>
    );
  }
}

export default App;
