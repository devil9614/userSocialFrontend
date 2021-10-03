import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import {ReactComponent as LoginLogo} from '../../assets/login.svg'
import { Button, Container, Grid, TextField } from '@mui/material'
import { useHistory } from 'react-router-dom'
import {gql,useMutation,useQuery} from "@apollo/client"





const UseQuery = ({UseQL}) => {
  const [AccToken,{loading,error,data}] = useMutation(UseQL)

  if (loading) return <p>Loading ... </p>
  if (error){
    console.log(error)
    return <p>Something wrong happened</p>
  } 
  AccToken()
  if (data){
    console.log(data.login.accessToken,"data of Access token")
    localStorage.setItem("token",data.login.accessToken)
  }
  
  return null
}



const Login = () => {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const history = useHistory()
  const handleUsernameChange = (e) => {
    e.preventDefault()
    console.log(username)
    setUsername(e.target.value)
  }
  const handlePasswordChange = (e) => {
    e.preventDefault()
    console.log(password)
    setPassword(e.target.value)
  }
  
  const UseQL = gql `
mutation LoginMutation {
  login(options: {
    username:${username},
    password:${password}
  }) {
    accessToken
  }
}
`

  const handleLogin = () => {
      UseQuery(UseQL)
  }
  return (
    <div className = "d-flex justify-content-around align-items-center flex-wrap" style = {{maxWidth:"100vw",height:"100vh"}}>
      <div >
        <LoginLogo className = "svglogo" style= {{width:"30vw"}}/>
      </div>
      <div className = "d-flex flex-column justify-content-center align-items-center">
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
                    handleLogin
                  }>
                    Log in
                  </Button>
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
    </div>
  )
}

export default Login
