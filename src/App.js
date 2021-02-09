import React, { useState } from 'react';
import './App.css';
import Todo from './Component/Todo/Todo';
import TodoForm from './Component/TodoForm/TodoForm';


function App() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([
    { text: 'Wake up in the morning', isCompleted: false },
    { text: 'Pray my morning Salat', isCompleted: false },
    { text: 'Read the holy Quran', isCompleted: false }
  ])

  const addToDo = text =>{
    const newToDo = [...todos, {text}];
    setTodos(newToDo);
  }

  const refactor = ()=>{

  }
  const completeToDo = index =>{
    const newToDo = [...todos];
    newToDo[index].isCompleted = true;
    setTodos(newToDo);
  }
  const inCompleteToDo = index =>{
    const newToDo = [...todos];
    newToDo[index].isCompleted = false;
    setTodos(newToDo);
  }
  const removeToDo = index =>{
    const newToDo = [...todos];
    newToDo.splice(index, 1)
    setTodos(newToDo);
  }

  return (
    <div className="App container">
      <div className='todo-list'>
        <div className="todo-text">
          {
            todos.map((todo, index) => (<Todo 
                                          todo={todo} 
                                          key={index} 
                                          index={index} 
                                          completeToDo={completeToDo} 
                                          inCompleteToDo={inCompleteToDo}
                                          removeToDo={removeToDo}>
                                        </Todo>))
          }
          <TodoForm addToDo={addToDo} value={value} setValue={setValue}></TodoForm>
        </div>
        
      </div>
    </div>
  );
}

export default App;
