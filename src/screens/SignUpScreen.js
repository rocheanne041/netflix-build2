import React from 'react'
import { useRef } from 'react';
import {  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
 } from '../firebase';
import './SignUpScreen.css';


function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        // console.log(userCredential);
      })
      .catch((error) => alert(error));
  };



//e if triggered event prevent refresh
const signIn = (e) => {
  e.preventDefault();
  signInWithEmailAndPassword(
    auth,
    emailRef.current.value,
    passwordRef.current.value 
    )
    .then((userCredential) => {
      console.log(userCredential);
    })
    .catch((error) => alert(error));
};

  return (
    <div className='signUpScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref ={emailRef} type="email" placeholder='Email'/>
        
        <input ref={passwordRef} type="password" placeholder='Password'/>
        <button type='Submit' onClick={signIn}>Sign In</button>
        <h4>
        <span className='signUpScreen_gray'>New to Netflix? </span> 
        <span className='signUpScreen_link' onClick={register}>Sign Up now.</span></h4>
      </form>
    </div>
  )
}

export default SignUpScreen