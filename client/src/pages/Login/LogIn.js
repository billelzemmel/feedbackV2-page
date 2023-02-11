import React, { useEffect, useState } from 'react'
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo, login } from '../../redux/Actions/authActions';
import Swal from 'sweetalert2'
import Loader from './Loader';

const LogIn =()=> {

    const [info,setInfo]=useState({
        email:"",
        password:"",
    })
    const auth= useSelector((state) =>state.authReducer)
     console.log('authNAVBAR',auth.user)
     const profUser = useSelector(state=>state.authReducer.user)
     const loader = useSelector(state=>state.authReducer.isLoading)
    
    const navigate=useNavigate()
    useEffect(()=>{
     
        if(auth.isAuth===true){  

          dispatch(getUserInfo());
            navigate('/loader')
            
            
        }
    },[navigate,auth.isAuth])
    const dispatch = useDispatch()
    const handleChange=(e)=>{
        e.preventDefault()
        setInfo({...info,[e.target.name]:e.target.value})
    }
    const handleLogin=(e)=>{
        e.preventDefault()
        dispatch(login(info))
    }
    console.log("info",info)
  return (
    
    <div>
    <div className="login-container">
    <div className="form-container">
      <h2 className="form-title">Welcome Back</h2>
      <div className="input-container">
        <i className="fa fa-envelope"></i>
        <input type="text" placeholder="email" className="input-field" name='email' onChange={handleChange}/>
      </div>
      <div className="input-container">
        <i className="fa fa-key"></i>
        <input type="password" placeholder="Password" className="input-field" name='password'onChange={handleChange}/>
      </div>
      <button className="login-button" onClick={handleLogin}>Login</button>
      <p>OR</p>
      <Link to="/register" className="signup-link">Sign up</Link>
    </div>
  </div>
  </div>
  );
}

export default LogIn
