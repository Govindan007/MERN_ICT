import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { colors } from '@mui/material';
const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{textAlign:"left"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">
            <Link to={'/'} style={{color:"black"}}>First</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/r'} style={{color:"black"}}>Register</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/dt'} style={{color:"black"}}>DataTable</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/dc'} style={{color:"black"}}>DataCard</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/sb'} style={{color:"black"}}>StateBasic</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/t'} style={{color:"black"}}>Task</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/c'} style={{color:"black"}}>Count</Link>
          </Button>
          <Button color="inherit">
            <Link to={'/i'} style={{color:"black"}}>Inputdata</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
