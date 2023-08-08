import axios from 'axios';
import React, { useState } from 'react'
// import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {Box,Typography,TextField,Button} from '@mui/material'
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
import './home.css'


function Home() {
  const [uname,setname]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
let location =useNavigate()
// console.log(email);

const Login=async (e)=>{
  e.preventDefault()
  const body={
    uname,
    email,
    password
  }
 const result= await axios.post('http://localhost:8000/Login',body)
 alert(result.data.message)
 console.log(result.data.message);
location('/books')
}
  return (
    <div >
 <div className='navbar'>
        <div className='navContainer'>
           
            <span className='logo'>Book Store</span>
            
        </div>
    </div>
{/* <h2>Login</h2>
<div className="form-center">
      <Form className='colo'>
        <Form.Group controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
          onChange={(e)=>setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
            
           className='' />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
             onChange={(e)=>setPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
            
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e)=>Login(e)}>
          Login
        </Button>
      </Form>
      </div> */}



    {/* ---------------------------------------------------- */}

    <Box
        maxWidth={400}
        display='flex'
        flexDirection={'column'}
        alignItems='center'
        justifyContent={'center'}
        boxShadow='10px 10px 20px #ccc'
        padding={3}
        margin='auto'
        marginTop={5}
        borderRadius={5}
        className='box'
      >
        <Typography variant='h4' padding={3} textAlign='center'></Typography>

       <TextField name='name' placeholder='Name' margin='normal' onChange={(e)=>setname(e.target.value)}/>
       
       <TextField name='email' type={'email'} placeholder='Email' margin='normal' onChange={(e)=>setEmail(e.target.value)} />

        <TextField name='password' type={'password'} placeholder='Password' margin='normal' onChange={(e)=>setPassword(e.target.value)} />


        <Button type='submit' sx={{borderRadius:3, marginTop:3 }} color='success' onClick={(e)=>Login(e)}>Login</Button>

      </Box>

    </div>
  )
}

export default Home