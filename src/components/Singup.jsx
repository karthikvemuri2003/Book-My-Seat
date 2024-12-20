import React from 'react'
import { useSingupMutation } from '../services/usersApi'
import {  useNavigate } from 'react-router-dom'
import { Field, Form, Formik } from 'formik'

function Singup() {
  var [singupfn]=useSingupMutation()
var navigate=useNavigate()
navigate('/dashboard')
  return (
    <div id='d4'>
      <h1>singup</h1>
    <div>
      <Formik initialValues={
        {
          username:"",
          password:""
        }
      }
      onSubmit={(values)=>{
        console.log(values)
        singupfn(values).then((res)=>{
          console.log("user singk")
          // if(res.data.msg=="singup success"){
          //   window.localStorage.setItem("token",res.data.token)
          //   navigate("/dashboard")
          // }
          // else{
          //   navigate("/")
          // }
        })
      }}
      >
        <center className='mt-5'>
        <div  style={{height:"600px",width:"300px",backgroundColor:"rgba(255, 255, 255, 0.1)"}}>
        <center>
        <Form >
          <Field className="w-75 mt-5" name="username">  
          </Field>
          <br/><h2 className='text-warning w-50'>Username</h2>
          <Field className="w-75" name="password"> 
          </Field>
          <br/><h2 className='text-warning w-50'>Password</h2>
          <br/>
          <button className='bg-primary'>Singup</button>
        </Form>
        </center>
        </div>
        </center>
      </Formik>
    </div>
    </div>
  )
}

export default Singup
