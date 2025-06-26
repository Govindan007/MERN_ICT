import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasic = () => {
    // var name="Govi";
    var [fname, setfname]=useState("Govi");
    const change=()=>{
        setfname("Govindan S ASIET")
    }
    return (
    <div>
      <Typography variant='h2'>Welcome {fname}</Typography>
      <Button variant='contained' onClick={()=>{setfname("Govindan")}}>Change name</Button><br /><br />
      <Button variant='contained' onClick={change}>Change name</Button>
    </div>
  )
}

export default StateBasic