import React, { Component } from 'react';
import Alena from './Alena';
import logo from './logo.svg';
import './App.css';
import TestInput from './TestInput'
import New from './News';
var arrayNames=['alena','alex','marina','vlad'];
var weatherInTheCity = [
  {
    city: 'Brest',
    tempreture: '-2',
    description:'ololo lololo some discription about weather at brest'
  },
  {
    city: 'Minsk',
    tempreture: '-4',
    description:'Minsk ololo lololo some discription about weather at minsk'
  },
  {
    city: 'Malorita',
    tempreture: '-1',
    description:'Malorita ololo lololo some discription about weather at malorita'
  }
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>what's the weather today?</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Alena data={weatherInTheCity} dataArray={arrayNames}/>
        <TestInput />
      </div>
    );
  }
}

export default App;
