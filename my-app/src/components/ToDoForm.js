import React from 'react'


export const ToDoForm = () => {
  return (
    <form>
        <input type="text" className='Form-input' placeholder='Enter To-Do'></input> 
        <button type="submit" className='Todo-btn'>Add To-Do</button>        
    </form>
  )
}
