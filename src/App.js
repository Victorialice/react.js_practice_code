import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard';
import LikesButton from './components/LikesButton';
import DigitalClock from './components/DigitalClock';
import CommentBox from './components/CommentBox';
import CommentList from './components/CommentList';
import ThemeContext from './theme-context';
import ThemeBar from './components/ThemeBar';
const tags = ['beautiful', 'wonderful']
const themes = {
  light: {
    className: 'btn btn-primary',
    bgColor: '#eeeeee',
    color: '#000'
  },
  dark: {
    className: 'btn btn-light',
    bgColor: '#222222',
    color: '#fff'
  }
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: ['this is my first reply']
    }
    this.addComment = this.addComment.bind(this)
  }
  addComment(comment){
    this.setState({
      comments: [...this.state.comments, comment]
    })
  }
  render() {
    const {comments} = this.state
    return (
      <ThemeContext.Provider value={themes.light}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <a href="#theme-switcher" className="btn btn-light">浅色主题</a>
            <a href="#theme-switcher" className="btn btn-secondary">深色主题</a>
          </header>
          <ThemeBar/>
          <NameCard name='King' number={1234567890} isHuman tags={tags}/>
          <LikesButton />
          <DigitalClock />
          <CommentList comments={comments}/>
          <CommentBox commentsLength={comments.length} onAddComment={this.addComment}/>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
