import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const Viewtable = () => {
  return (
    <div id="table">
      <TableContainer component={Paper} id="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Movie Name</TableCell>
            <TableCell align="right">Director</TableCell>
            <TableCell align="right">Lead Actor&nbsp;(g)</TableCell>
            <TableCell align="right">Year of Relese&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>movie1</TableCell>
            <TableCell>Director1</TableCell>
            <TableCell>Lead Actor1</TableCell>
            <TableCell>Year of Relese1</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>movie2</TableCell>
            <TableCell>Director2</TableCell>
            <TableCell>Lead Actor2</TableCell>
            <TableCell>Year of Relese2</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>movie3</TableCell>
            <TableCell>Director3</TableCell>
            <TableCell>Lead Actor3</TableCell>
            <TableCell>Year of Relese3</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Viewtable
