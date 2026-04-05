import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faPenToSquare } from '@fortawesome/free-solid-svg-icons';

export const ToDo = () => {
  return (
    <div className='Todo'>
          <p>To Do</p>
          <div className='delete-container'>  
              <FontAwesomeIcon icon={faPenToSquare} className='edit-btn' />
              <FontAwesomeIcon icon={faTrash} className='delete-btn' />
          </div>
      </div>
  )
}
