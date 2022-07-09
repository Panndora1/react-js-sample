import React, { Component } from 'react';
import { Container, NavBar } from './components';


class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <NavBar />
        <Container />
      </div>
    );
  }
}

export default App;
