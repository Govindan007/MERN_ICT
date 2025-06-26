import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Datatable = () => {
  var [users, setUsers]= useState([])
  // useEffect=(()=>{},[])
  useEffect(()=>{
    // axios.get("url").then((res)=>{}).catch((error)=>{})
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res)=>{
        console.log(res);
        setUsers(res.data)
      }).catch((error)=>{
        console.log(error);
      })
  },[])
  return (
    <div>
      <Typography variant='h3'>Welcome To Table</Typography>
      <TableContainer>
        <Table id="table">
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>username</TableCell>
                    <TableCell>email</TableCell>
                    <TableCell>city</TableCell>
                    <TableCell>street</TableCell>
                    <TableCell>suite</TableCell>
                    <TableCell>zip code</TableCell>
                    <TableCell>lat</TableCell>
                    <TableCell>lng</TableCell>
                </TableRow>
            </TableHead>
        
        <TableBody>
            {users.map((val,i)=>{
              return(
                <TableRow key="i">
                  <TableCell>{val.name}</TableCell>
                  <TableCell>{val.username}</TableCell>
                  <TableCell>{val.email}</TableCell>
                  <TableCell>{val.address.city}</TableCell>
                  <TableCell>{val.address.street}</TableCell>
                  <TableCell>{val.address.suite}</TableCell>
                  <TableCell>{val.address.zipcode}</TableCell>
                  <TableCell>{val.address.geo.lat}</TableCell>
                  <TableCell>{val.address.geo.lng}</TableCell>
                </TableRow>
              )
            })}
        </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Datatable
