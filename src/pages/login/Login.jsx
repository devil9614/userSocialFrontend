import React, { useState } from 'react'
import Card from '@mui/material/Card'
import {ReactComponent as LoginLogo} from '../../assets/login.svg'
import { Button, Container, Grid, TextField } from '@mui/material'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const history = useHistory()
  const handleUsernameChange = (e) => {
    console.log(username)
    setUsername(e.value.target)
  }
  const handlePasswordChange = (e) => {
    console.log(password)
    setPassword(e.target.value)
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
                        borderStyle= "none"
                        onChange = {e => handlePasswordChange(e)}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} style = {{justifyContent:"center",alignItems:"center"}}>
                  <Button color="primary"  type="submit" variant="contained">
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
