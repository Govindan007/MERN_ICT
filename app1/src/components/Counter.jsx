import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [count, setCount]=useState(0)
    const increment=()=>{
        setCount(++count)
    }
    const decrement=()=>{
        setCount(--count)
    }
  return (
    <div>
      <Typography variant='h3'>Count:{count}</Typography>
      <br />
      <Button variant='contained' color='success' onClick={increment}>+</Button>&nbsp;
      <Button variant='contained' color='error' onClick={decrement}>-</Button>
    </div>
  )
}

export default Counter
