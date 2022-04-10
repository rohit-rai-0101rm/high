import React from 'react'
import './ButtonGroups.css'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
const ButtonGroups = () => {
  return (
    <div className='buttonContainer'>

      <div class="btn-group">
        <button className='btn'>Predict</button>
        <button className='btn'>Analytics View</button>
        <button className='btn'>Advance Search </button>
      </div>
      <div className='Search'>
        <input
          className='searchBox'
          placeholder='Search Customer Id'
        />

      </div>
      <div class="btn-group">
        <button className='btn'>Add</button>
        <button className='btn'>Edit</button>
        <button className='btn'>Delete</button>
      </div>


    </div>
  )
}

export default ButtonGroups