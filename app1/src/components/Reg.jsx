import { TextField, Typography } from '@mui/material'
import React from 'react'

const Reg = () => {
  return (
    <div className="regbox" >
        <TextField id="regfield" variant='outlined' label="Enter Name"/>&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField id="regfield" variant='outlined' label="Enter Place"/>&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField id="regfield" variant='outlined' label="Enter age"/>&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField id="regfield" variant='outlined' label="Enter UserName"/>&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField id="regfield" variant='outlined' label="Enter Password" />&nbsp;&nbsp;&nbsp;&nbsp;
      
    </div>
  )
}

export default Reg
