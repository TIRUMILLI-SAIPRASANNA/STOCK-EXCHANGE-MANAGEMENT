import React,{useState,useContext} from 'react'
import './Registration Form CSS.css'
import axios from 'axios';
import {store} from './App';

const Login = () => {
    const [token,setToken] = useContext(store)
    const [data,setData] = useState({
        email:'',
        password:'',
    })
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:8001/login',data).then(
            res => {setToken(res.data.token)({
                email:'',
                password:''
                
            })}
        )
    }
   
    return (
        <body>
        <div class="loginbox">
        <h1>Login</h1>
            <center>
            <form onSubmit={submitHandler} autocomplete="off">
                <h3>Login</h3>
                <input type="email" onChange={changeHandler} name="email" placeholder="Email" /><br />
                <input type="password" onChange={changeHandler} name="password" placeholder="Password" /><br />
                <input type="submit" value="Login" /><br />
            </form>
            </center>
        </div>
        </body>
    )
}

export default Login