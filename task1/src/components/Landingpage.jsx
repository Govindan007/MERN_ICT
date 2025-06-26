import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { colors } from '@mui/material';
import { Link } from 'react-router-dom';
import Viewtable from './Viewtable';
import Addmovie from './Addmovie';

const Landingpage = () => {
  return (
    <div id="card1">
    <div id="card2">
    <a href='./Addmovie.jsx'>
        <Card sx={{ maxWidth: 345 }} id="cardcolor">
        <CardMedia
          sx={{ height: 140 }}
          image=" "
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            ADD MOVIES
          </Typography>
        
        </CardContent>
        <CardActions>
        
        </CardActions>
      </Card>
    </a>
    </div>
    <div id="card3">
         <Link to={'/v'}>
    <Card sx={{ maxWidth: 345 }} id="cardcolor">
      <CardMedia
        sx={{ height: 140 }}
         image=" "
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          VIEW MOVIES
        </Typography>
        
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
    </Link>
    </div>
    </div>
  )
}

export default Landingpage
