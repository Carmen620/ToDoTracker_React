import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faPenToSquare } from '@fortawesome/free-solid-svg-icons';

/*
Why task.task instead of task?
  In this case, the task prop is an object that has a property called task, which holds the actual string value of the task. Therefore, to access the string value of the task, we need to use task.task.
What are objects in curly braces called? 
  Objects in curly braces are called literal objects or object literals in JavaScript. They are a way to define and create objects using a simple syntax. The properties of the object are defined as key-value pairs, where the key is a string (or symbol) and the value can be any valid JavaScript expression, including other objects, arrays, functions, etc.
*/
export const ToDo = ({task}) => {
  return (
    <div className='Todo'>
          <p>{task.task}</p>
          <div className='delete-container'>  
              <FontAwesomeIcon icon={faPenToSquare} className='edit-btn' />
              <FontAwesomeIcon icon={faTrash} className='delete-btn' />
          </div>
      </div>
  )
}
