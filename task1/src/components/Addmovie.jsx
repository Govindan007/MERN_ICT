import { TextField, Typography } from '@mui/material'
import React from 'react'

const Addmovie = () => {
  return (
    <div id="reg">
        <Typography variant='h2'>Enter Movie details</Typography>
              <TextField id="regfield" variant='outlined' label="Enter Movie Name"/>&nbsp;&nbsp;&nbsp;&nbsp;
              <TextField id="regfield" variant='outlined' label="Enter Director"/>&nbsp;&nbsp;&nbsp;&nbsp;
              <TextField id="regfield" variant='outlined' label="Enter Lead Actors"/>&nbsp;&nbsp;&nbsp;&nbsp;
              <TextField id="regfield" variant='outlined' label="Enter Year of Release"/>&nbsp;&nbsp;&nbsp;&nbsp;<br/>
              <TextField id="regfield" variant='outlined' label="SUBMIT"/>
              
    </div>
  )
}

export default Addmovie
