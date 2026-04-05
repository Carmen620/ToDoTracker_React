import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faPenToSquare } from '@fortawesome/free-solid-svg-icons';

export const ToDo = () => {
  return (
    <div className='Todo'>
          <p>To Do</p>
          <div>  
              <FontAwesomeIcon icon={faTrash} className='delete-btn' />
          </div>
      </div>
  )
}
