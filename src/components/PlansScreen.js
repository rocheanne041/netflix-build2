import React from 'react'
import './PlansScreen.css';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { NetflixButton } from '../styled/styledComponents';
import { useDispatch } from 'react-redux';
import { setPrice } from '../features/PriceSlice';
import { useNavigate } from 'react-router';

const Plans = ({cost, children, color, wide}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();


const handleClick = (cost) => {
  dispatch(setPrice(cost))
  navigate("/checkout")
}

return (
    <div className= {classes.root}>
    <Typography className={classes.standard} variant= "h5">
    {children}
    </Typography>
<NetflixButton 
  color = {color} 
  wide = {wide}
  onClick = {() => handleClick(cost)}> Subscribe </NetflixButton>

    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "30px",
    marginBottom: "30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& button": {
      marginBottom: "20px"
    }
  },
  standard: {
    fontSize: "1.2rem"
  }
}));

export default Plans