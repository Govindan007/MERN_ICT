import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [count, setCount] = useState(0)
  var [stu,setStu]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3004/")
    .then((res)=>{
      console.log(res)
      setStu(res.data)
    })
    .catch((error)=>{
      console.log(error)
    });
  },[])
  return (
    <div>
      <TableContainer>
        <Table id="hometable">
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>age</TableCell>
                    <TableCell>course</TableCell>
                    <TableCell>place</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              {stu.map((val,i)=>{
                return(
                  <TableRow key="i">
                    <TableCell>{val.name}</TableCell>
                    <TableCell>{val.age}</TableCell>
                    <TableCell>{val.course}</TableCell>
                    <TableCell>{val.place}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Home
