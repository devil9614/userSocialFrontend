import React, { useEffect, useState } from 'react'
import {ReactComponent as RegisterLogo} from '../../assets/welcome.svg'
import { Button, Card, Container, Grid, TextField } from '@mui/material'
import { useHistory } from 'react-router-dom'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'

const Register_QL = gql`
mutation Mutation($registerOptions: UsernamePasswordInput!) {
  register(options: $registerOptions) {
    errors {
      message
      field
    }
    user {
      id
      createdAt
      updatedAt
      username
    }
  }
}
`
const RegisterQuery = () => {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [errors,setErrors] = useState("")
  const history = useHistory()
  const [register_func,{error,data}] = useMutation(Register_QL,{variables:{
    "registerOptions":{
      "username": username,
      "password": password,
    }
  }})
  const handleUsernameChange = (e) => {
    e.preventDefault()
    setUsername(e.target.value)
  }
  const handlePasswordChange = (e) => {
    e.preventDefault()
    setPassword(e.target.value)
  }
  // if (loading) return <p>Loading...</p>
  if (error){
    console.log(error)
  }
  
  console.log(data)
  const handleSubmit = () => {
    register_func()
    console.log("clicked",data)
  }
  useEffect(() => {
    if (data){
      if (data.register.errors){
        console.log(data.register.errors[0].message,"error")
        setErrors(data.register.errors[0].message)
      }
      else{
        console.log(data.register.user,"user")
        history.replace("/login")
        alert("user was created")
      }
      
    }
  },[data])
  return (
    <div>
    <Card className = "p-4">
            <h3 className = "mb-5 text-center">Register</h3>
            <div>
            <Container maxWidth="xs">
            <form>
              <Grid container spacing={4} >
                <Grid item xs={12}>
                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      <TextField fullWidth placeholder="Email" name="email" size="small" variant="outlined" 
                      onChange = {e => handleUsernameChange(e)}/>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        placeholder="Password"
                        name="password"
                        size="small"
                        type="password"
                        variant="outlined"
                        onChange = {e => handlePasswordChange(e)}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} style = {{justifyContent:"center",alignItems:"center"}}>
                  <Button onClick = {handleSubmit} variant = "contained" color = "primary">Register</Button>
                  <p className = "text-center mt-3">{errors}</p>
                </Grid>
              </Grid>
            </form>
          </Container>
            </div>
        </Card>
        <div className = "m-3" style = {{cursor:"pointer",}}>
        <span onClick = {() => history.replace('/login')} >Already have an account? <a style = {{color:"blue"}}>login now</a></span>
        </div>
    </div>
    
  )
}

const Register = () => {
  
  return (
    <div>
      <div className = "d-flex justify-content-around align-items-center flex-wrap" style = {{maxWidth:"100vw",height:"100vh"}}>
      <div >
        <RegisterLogo className = "svglogo" style = {{width:"30vw"}}/>
      </div>
      <div className = "d-flex flex-column justify-content-center align-items-center">
        <RegisterQuery/>
      </div> 
    </div>
    </div>
  )
}

export default Register
