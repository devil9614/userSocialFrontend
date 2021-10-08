import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import {ReactComponent as LoginLogo} from '../../assets/login.svg'
import { Button, Container, Grid, TextField } from '@mui/material'
import { useHistory } from 'react-router-dom'
import {gql,useMutation} from "@apollo/client"


const UseQL = gql `
  mutation LoginMutation($loginOptions: UsernamePasswordInput!) {
    login(options: $loginOptions) {
      accessToken
    }
  }
`
const UseQuery = () => {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [errors,setErrors] = useState("")
  const history = useHistory()

  const [loginFunc,{loading,error,data}] = useMutation(UseQL,{variables:{
    "loginOptions":{
      "username": username,
      "password": password,
    }
  },onError:(error)=> {
    
    console.log(error,"onerror")
    setErrors(error.message)

  }})
  console.log(loading,error,data,"Query details")
  const handleUsernameChange = (e) => {
    e.preventDefault()
    setUsername(e.target.value)
  }
  const handlePasswordChange = (e) => {
    e.preventDefault()
    setPassword(e.target.value)
  }
  // if (data){console.log(data)
  // localStorage.setItem("token",data.login.accessToken)}
  const loginClick = () => {
    loginFunc()
    
    console.log(data,"data")
  }
  useEffect(() => {
    if (data){
      if (data.login.accessToken){
        console.log(data.login.accessToken)
        localStorage.setItem("token",data.login.accessToken)
        history.push("/")

      }
    }
    if (error) console.log(error.graphQLErrors.message)
  },[data,error,history])
  return (
    <div>
    <Card className = "p-4">
            <h3 className = "mb-4 text-center">Login</h3>
            <div>
            <Container maxWidth="xs">
            <form>
              <Grid container spacing={3}>
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
                  <Button color="primary"  variant="contained" onClick = {
                    loginClick
                  }>
                    Log in
                  </Button>
                  <p style = {{textAlign:"center",paddingTop:"1rem"}}>{errors}</p>
                </Grid>
              </Grid>
            </form>
          </Container>
            </div>
        </Card>
      <div className = "m-3" style = {{cursor:"pointer",}}>
      <span onClick = {() => history.replace('/register')} >Need an account? <a style = {{color:"blue"}}>Create a new Account</a></span>
      </div>
    </div>
  )
}



const Login = () => {
  return (
    <div className = "d-flex justify-content-around align-items-center flex-wrap" style = {{maxWidth:"100vw",height:"100vh"}}>
      <div >
        <LoginLogo className = "svglogo" style= {{width:"30vw"}}/>
      </div>
      <div className = "d-flex flex-column justify-content-center align-items-center">
      <UseQuery/>
      </div> 
    </div>
  )
}

export default Login
