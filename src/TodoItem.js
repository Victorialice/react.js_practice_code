import React from 'react'

class TodoItem extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  handleDelete = () => {
    console.log(this.props.index)
    this.props.delete(this.props.index)
  }

  render() {
    return (
      <li onClick={this.handleDelete}>{this.props.content}</li>
    )
  }
}
export default TodoItem;
