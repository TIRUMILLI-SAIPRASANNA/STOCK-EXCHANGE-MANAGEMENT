import React,{useState} from 'react'
import './Registration Form CSS.css'
import axios from 'axios';

const SignUp = () => {
    const [data,setData] = useState({
        username:'',
        email:'',
        password:'',
        confirmpassword:''
    })
    
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault();
        console.log("user data:" + data)
        //axios.post('http://localhost:/register',data).then(
        //    res => {alert(data);setData({
        //        username:'',
        //        email:'',
        //        password:'',
        //        confirmpassword:''
        //    })}
       // )
       try {
         axios.post("http://localhost:27017/register", {
            username,
            email,
            password,
            confirmpassword
        });
        navigate("/");
      } catch (error) {
        console.log(error);
      }
        

    }
    return (
      <body>
        <div class="loginbox">
        <h1>SignUp</h1>
            <center>
            <form onSubmit={submitHandler} autocomplete="off">
                
                <input type="text" onChange={changeHandler} name="username" placeholder="Your User Name" required/>
    <br></br>
                <input type="email" onChange={changeHandler} name="email"placeholder="Your Email" /><br/>
                <input type="password" onChange={changeHandler} name="password" placeholder="Password" /><br />
                <input type="password" onChange={changeHandler} name="confirmpassword" placeholder="Confirm Password" /><br />
                <input type="submit" value="SignUp" /><br />
            </form>
            </center>
        </div>
      </body>
    )
}

export default SignUp