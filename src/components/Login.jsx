import { Field, Formik,Form } from 'formik'
import React from 'react'
import { useLoginMutation} from '../services/usersApi'
import {  Link, useNavigate } from 'react-router-dom'
import "./Details.css"
function Login() {
  var [loginfn]=useLoginMutation()
  var navigate=useNavigate();
  return (
    <div id='d3' style={{height:"600px"}}>
      <h1 className='text-warning'>Login</h1>
      <Formik initialValues={
        {
          username:"",
          password:""
        }
      }
      onSubmit={(values)=>{
        console.log(values)
        loginfn(values).then((res)=>{
          console.log(res)
            if(res.data.msg=="success"){
              alert("hi")
              window.localStorage.setItem("token",res.data.token)
              navigate("/dashboard")
            }
            else{
              navigate("/login")
            }
        })
      }}
      >
        <center className='mt-5'>
        <div  style={{height:"300px",width:"300px",backgroundColor:"rgba(255, 255, 255, 0.1)"}}>
        <center>
        <Form >
          <Field className="w-75 mt-5" name="username">  
          </Field>
          <br/><h2 className='text-warning w-50'>Username</h2>
          <Field className="w-75" name="password"> 
          </Field>
          <br/><h2 className='text-warning w-50'>Password</h2>
          <br/>
          <button className='bg-primary'>login</button>
        </Form>
        </center>
      <div><Link className='text-white' to="/singup"><h4>singup</h4></Link></div>
        </div>
        </center>
      </Formik>
    </div>
  )
}

export default Login
