import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import ButtonAddFemale from './ButtonAddFemale';
import ButtonAddMale from './ButtonAddMale';
import ModelsList from './ModelsList'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header></Header>
      <ButtonAddFemale></ButtonAddFemale>
      <ButtonAddMale></ButtonAddMale>
      <ModelsList></ModelsList>
        
      </div>
    );
  }
}

export default App;
