import React, {useState, useEffect, useHistory }  from 'react';
import { useNavigate } from 'react-router';
import "./Nav.css";

function NavBar() {
  const [show, handleShow] = useState(false);
  //something called history - change page pushing new page goes back to history
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if(window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false)
    }
  }

//scroll
  //run once when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar); // everytime we scroll, listen to an event, trigger the function transition navbar
    return () => window.removeEventListener("scroll", transitionNavBar); //cleanup
  },[]) // 2nd argument


  return (
    // only render nav_black class if show variable is true
  <div className={`nav ${show && "nav_black"}`}> 
  <div className='nav_content'>
<img
  onClick={() => navigate ("/")}
       className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
     
      
      <img
      onClick={() => navigate("/profile")}
    className="nav-avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
        />
       
        </div>
  </div>
  );
}

export default NavBar;
