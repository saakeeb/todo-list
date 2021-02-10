import React from 'react';
import './Todo.css'

const Todo = ({ todo, index, completeToDo, inCompleteToDo, removeToDo }) => {
    const time = new Date().toLocaleString();
    console.log(time);
    return (
        <div className="todo-style">
            <div className="todo-task">
                <h3 style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>{todo.text}</h3>
                <h6>{time}</h6>
            </div>

            <div className="todo-button">
                {
                    !todo.isCompleted ?
                        <button className="button" onClick={() => completeToDo(index)} style={{ backgroundColor: 'green' }}>Complete</button> :
                        <button className="button" onClick={() => inCompleteToDo(index)} style={{ backgroundColor: 'yellow' }}>InComplete</button>
                }

                <button className="button" onClick={() => removeToDo(index)} style={{ backgroundColor: 'red' }}>Remove</button>
            </div>

        </div>
    );
};

export default Todo;