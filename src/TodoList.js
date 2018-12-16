import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['hello', 'world'],
      txt: ''
    }
  }

  handleAdd = () => {
    let list = [...this.state.list, this.state.txt]
    this.setState({
      list,
      txt: ''
    })
  }
  handleChange = e => {
    this.setState({
      txt: e.target.value
    })
  }
  handleDelete = index => {
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list
    })
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" value={this.state.txt} onChange={this.handleChange}></input>
          <button onClick={this.handleAdd}>add</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              // return <li key={index} onClick={() => this.handleDelete(index)}>{item}</li>
              return <TodoItem key={index} content={item} delete={(index) => this.handleDelete(index)} index={index}></TodoItem>
            })
          }
        </ul>
      </div>
    )
  }
}

export default TodoList;
