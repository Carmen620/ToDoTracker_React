import React, {useState} from 'react'


export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();

        editTodo(value, task.id);

        setValue('');
    }
  return (
    <form onSubmit={handleSubmit}>
        <input name='task' type="text" className='Form-input' value={value} placeholder='Update todo' onChange={(e) => setValue(e.target.value)}>
        </input> 
        <button type="submit" className='Todo-btn'>Update todo</button>        
    </form>
  )
}