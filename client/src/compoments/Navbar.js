import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getUserInfo, logout } from '../redux/Actions/authActions';
import './Navbar.css';
 
const Navbar=()=> {
    const dispatch=useDispatch()
    const handleLogout =()=>{
        dispatch(logout())
    }
    
    const auth=useSelector((state)=>state.authReducer)
    const navigate = useNavigate()
    useEffect(()=>{
        if (auth.isAuth===false){
            navigate('/')
        }
    },[auth.isAuth]);
    

  return (
   
    <div class="landing-page">
      <div class="container">
        <div class="header-area">
          <div class="logo">Your <b>Website</b></div>
          <ul class="links">
          { auth.isAuth?
             <li><Link to="/profile"style={{textDecoration:'none',color:'#5d5d5d'}}>Profile</Link></li>
            
            :null
          }
            { auth.isAuth?
            <li><Link to ="/" style={{textDecoration:'none',color:'#FFF'}} onClick={handleLogout}>LOGOUT</Link></li>
            
            :
            <>
             <li><Link to="/"style={{textDecoration:'none',color:'#5d5d5d'}}>Home</Link></li>
            <li><Link to="/register"style={{textDecoration:'none',color:'#5d5d5d'}}>signup</Link></li>
            <li><Link to="/login" style={{textDecoration:'none',color:'#FFF'}}>Get Started</Link></li>

            </>
            }
            
              
            </ul>
        </div>
       </div>
       </div>

  )
}

export default Navbar
