import React, {useState} from 'react'


export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);
    const handleSubmit = (e) => {
        e.preventDefault();

        editTodo(value, task.id);

        setValue('');
    }
  return (
    <form onSubmit={handleSubmit}>
        <input name='task' type="text" className='Form-input updateForm-input' value={value} placeholder='Update To-Do' onChange={(e) => setValue(e.target.value)}>
        </input> 
        <button type="submit" className='Todo-btn updateTodo-btn'>Update</button>        
    </form>
  )
}