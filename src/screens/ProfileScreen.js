import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { auth } from '../firebase';
import NavBar from '../components/NavBar';
import Plans from '../components/PlansScreen';
import { NetflixButton } from '../styled/styledComponents';
import { useNavigate } from 'react-router';

const Profile = () => {
   const classes = useStyles();
   const navigate = useNavigate();

   const signout = (e) => {
     auth.signOut();
     navigate.push("/login")
   }

   return (
     <>
       <NavBar />
       <div className={classes.root}>
        <Typography variant ="h3"> Edit Profile</Typography>
        <div className={classes.info}>
          <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
        <div className={classes.details}>
          <div className={classes.plans}>
            <Typography variant="h6">
              Email
            </Typography>
            <Typography className={classes.plansText} variant="h5" gutterBottom>Subscription</Typography>
            <Plans cost = {150}> 
            Netflix Standard </Plans>
            <Plans cost = {450}> 
            Netflix Basic </Plans>
            <Plans cost = {550}> 
            Netflix Premium </Plans>
            <NetflixButton onClick={signout} wide="fullWidth">SignOut</NetflixButton>
          </div>
        </div>
        </div>

       </div>
     </>
   )
}

const useStyles = makeStyles((theme) => (
  {
    root: {
      color: "#fff",
      minHeight: "100vh",
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      alignItems : "center"
    }, 
    info: {
      width: "80%",
      display: "flex",
      "& img" : {
        height: "100px"
      }
    },
    details: {
      width: "100%",
      marginLeft: "30px",
      "& h6": {
        backgroundColor: "#aaa",
        padding: "10px",
        marginBottom: "10px",
        fontSize: "18px"
      }
    }, 
    plans: {
      width: "100%"
    },
    plansText : {
      borderBottom: "1px solid lightgray"
    }
  }));

  export default Profile