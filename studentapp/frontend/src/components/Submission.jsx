import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Submission = () => {
  return (
    <div id="reg">
      <Typography variant='h3'>Registration</Typography><br />
      <TextField variant='outlined' label="Name:"/><br />
      <TextField variant='outlined' label="Age:"/><br />
      <TextField variant='outlined' label="Course:"/><br />
      <TextField variant='outlined' label="Place:"/><br />
      <Button variant='outlined' style={{borderColor:"lavender"}}>ADD</Button>
    </div>
  )
}

export default Submission
