import React from 'react';
import Task from './components/task';
import TaskInput from './components/TaskInput';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      tasks: [
        { id: 0, title: 'Create todo-react-app', done: false },
        { id: 1, title: 'Make a video about it', done: true },
        { id: 2, title: 'Create simple todo-list', done: false }
      ]
    }
  }

  doneTask = (id) => {
    console.log('done');
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      tasks[index].done = true;
      return tasks;
    });
  };

  deleteTask = (id) => {
    console.log('del');
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
    })
  };

  addTasks = (task) => {

    let newTasks = this.state.tasks.slice();
    newTasks.push({
      id: newTasks.length !== 0 ? newTasks.length : 0,
      title: task,
      done: false,
    });
    this.setState(
      { tasks: newTasks }
    )
  }

  render() {
    console.log(this.state);
    const { tasks } = this.state;
    console.log(tasks);

    const activeTasks = tasks.filter(task => !task.done);
    const doneTasks = tasks.filter(task => task.done);


    return (
      <div className='App'>
        <h1 className='top'>Active tasks: {activeTasks.length}</h1>
        {[...activeTasks, ...doneTasks].map(task => (
          <Task
            doneTask={() => this.doneTask(task.id)}
            deleteTask={() => this.deleteTask(task.id)}
            task={task} key={task.id} />)
        )}
        <TaskInput addTasks={this.addTasks} />
      </div>
    );
  }

}


export default App;
