import { useState } from 'react';
import { Task } from "./Task";
import './App.css';

function App() {
const [todoList, setTodoList] = useState([]);
const [newTask, setNewTask] = useState("");

const handleChange = (event) => {
  setNewTask(event.target.value);
}

const addTask = () => {
  const task = {
    id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
    name: newTask,
    isCompleted: false,
  };
  
  setTodoList([...todoList, task]);
};

const deleteTask = (id) => {
  //filter function
  setTodoList(todoList.filter((task) => task.id !== id));
};

const completeTask = (id) => {
  setTodoList(
    todoList.map((task) => {
      if(task.id === id) 
      // ... means : keep all object same & add
        return {...task, isCompleted: true};
      else 
        return task;
    })
  );
};

  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleChange}></input>
        <button onClick={addTask}> Add Task </button>
      </div>
     
    <div className='taskList'>
      {todoList.map((task) => {
        return ( 
        <Task 
        name = {task.name} 
        id={task.id} 
        deleteTask={deleteTask} 
        isCompleted = {task.isCompleted} 
        completeTask = {completeTask}/>
        );
      })}
    </div>

    </div>
  );
}

export default App;
