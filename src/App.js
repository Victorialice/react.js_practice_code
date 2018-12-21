import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard';
import LikesButton from './components/LikesButton';
import DigitalClock from './components/DigitalClock';
import CommentBox from './components/CommentBox';
const tags = ['beautiful', 'wonderful']
class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      </header>
      <NameCard name='King' number={1234567890} isHuman tags={tags}/>
      <LikesButton />
      <DigitalClock />
      <CommentBox />
      </div>
    );
  }
}

export default App;
