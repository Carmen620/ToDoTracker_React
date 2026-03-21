import React from 'react'


export const ToDoForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const task = formData.get('task');
        for(let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
        }
    };

  return (
    <form onSubmit={handleSubmit}>
        <input name='task' type="text" className='Form-input' placeholder='Enter To-Do'></input> 
        <button type="submit" className='Todo-btn'>Add To-Do</button>        
    </form>
  )
}
