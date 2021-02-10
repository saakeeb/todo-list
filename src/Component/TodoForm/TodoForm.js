import React, { useState } from 'react';

const TodoForm = ({addToDo, value, setValue}) => {
    

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!value) return;
        addToDo(value);
        e.target.reset();

    }
    console.log(value)

    const submitButton = {
        marginTop: '15px'
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="text" id="text" onChange={e=>setValue(e.target.value)} placeholder='Add your list'/>
                <input type="submit" id="submit" value="Submit" style={submitButton}/>
            </form>

        </div>
    );
};

export default TodoForm;