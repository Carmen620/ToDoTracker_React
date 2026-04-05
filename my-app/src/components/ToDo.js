import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faPenToSquare,faSquare, faSquareCheck} from '@fortawesome/free-solid-svg-icons';
/*
Why task.task instead of task?
  In this case, the task prop is an object that has a property called task, which holds the actual string value of the task. Therefore, to access the string value of the task, we need to use task.task.
What are objects in curly braces called? 
  Objects in curly braces are called literal objects or object literals in JavaScript. They are a way to define and create objects using a simple syntax. The properties of the object are defined as key-value pairs, where the key is a string (or symbol) and the value can be any valid JavaScript expression, including other objects, arrays, functions, etc.
What means the syntax "task" ? "task"? 
  The syntax "task" ? "task" : "" means that if the task property is truthy, it will display the value of the task property, otherwise it will display an empty string.
What is such a syntax called?
  This syntax is called a ternary operator in JavaScript. It is a shorthand way of writing an if-else statement. The general syntax is condition ? expressionIfTrue : expressionIfFalse. In this case, it checks if the task property is truthy, and if so, it returns the value of task.task; otherwise, it returns an empty string.
*/

export const ToDo = ({task, toggleComplete, deleteTodo}) => {
  return (
    <div className='Todo'>
          <p onClick ={()=>toggleComplete(task.id)} className={`${task.completed ? 'completed' : ''}`}>{task.task}</p>
          <div className='delete-container'>  
              <FontAwesomeIcon icon={faPenToSquare} className='edit-btn' />
              <FontAwesomeIcon icon={faTrash} className='delete-btn' onClick={()=>{deleteTodo(task.id)}}/>
              <FontAwesomeIcon 
              icon={task.completed ? faSquareCheck : faSquare} 
              className='toggle-btn' 
              onClick={() => toggleComplete(task.id)} 
              />
          </div>
      </div>
  )
}
