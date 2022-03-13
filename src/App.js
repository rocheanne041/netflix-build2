import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import "./App.css";
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import PayPal from './screens/Paypal';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';


function App() {
    const user = useSelector(selectUser);
    const classes = useStyles();
    //dispatch login or logout action
    const dispatch = useDispatch();
    //user listen to login state
    useEffect(() => {
        //onAuthStateChanged - when detects someone logged in remember the state, access the user from any app listens to any authenticated change
        //like a memory in browser it's sign in
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            if (userAuth) {
                //Logged in
                console.log(userAuth);

                dispatch(login({
                    uid: userAuth.uid,
                    email: userAuth.email,
                }))
            } else {
                //logged out
                dispatch(logout())
            }
        });
        //don't want to duplicate to another listener
        //when it cleans up 
        return unsubscribe;
    }, [dispatch])

    return ( <
        div className = { classes.root } >
        <
        Router > { /* if there's no user it will go to login screen */ } {
            !user ? ( <
                    LoginScreen / > ) :
                ( <
                    Routes >
                    <
                    Route path = '/profile'
                    element = { < ProfileScreen / > }
                    /> <
                    Route path = '/checkout'
                    element = { < PayPal / > }
                    /> <
                    Route path = "/"
                    element = { < HomeScreen / > }
                    /> <
                    /Routes>
                )
        } <
        /Router> <
        /div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100vh",
        backgroundColor: "#111"
    }
}));



export default App;