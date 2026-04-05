import React, {useState} from 'react'


export const ToDoForm = ({addTodo}) => {
    const [value, setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

        addTodo(value);

        setValue('');
    }
  return (
    <form onSubmit={handleSubmit}>
        <input name='task' type="text" className='Form-input' value={value} placeholder='Enter To-Do' onChange={(e) => setValue(e.target.value)}>
        </input> 
        <button type="submit" className='Todo-btn'>Add To-Do</button>        
    </form>
  )
}
