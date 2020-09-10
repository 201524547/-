import React, { Component } from 'react';
import TodoForm from '../template/TodoForm';
import TodoList from '../template/TodoList';


class App extends Component {
  
  state = {
    id: 1,
    target: 0,
    targetid: -1,
    value: '',
    toDoList: []
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { toDoList } = this.state;

    this.setState({
      toDoList: toDoList.concat({
        id: this.id++,
        text: this.state.value,
      }),
      value: ''
    });
  };

  setValue = (data) =>{
    this.setState(
      {value: data}
    )
  };
  
  setTarget = (data) =>{
    this.setState(
      {target: data}
    )
  }

  setTargetId = (data) =>{
    this.setState(
      {targetid: data}
    )
  }

  handleRemove = () => {
    this.setState({
      toDoList: this.state.toDoList.filter((data) => data.id !== this.state.targetid),
      targetid: -1
    });
  };

  
  handleUpdate = () => {
    const { toDoList } = this.state.toDoList;
    const { targetid } = this.state.targetid;
    const { value } = this.state.value;

    this.setState({
      toDoList: toDoList.map((toDoList) => {
        if (toDoList.id === this.state.targetid) {

          return {
            targetid,
            value
          };
        }
        return toDoList;
      }),
    });
  };

  render(){
    return (
      <div>
        <TodoForm handleSubmit={this.handleSubmit} setValue={this.setValue}/>
        <TodoList data={this.state.toDoList} handleUpdate={this.handleUpdate} handleRemove={this.handleRemove }/>
      </div>
    );
  }
}

export default App;
