import { Button } from '@mui/material'
import React from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import {ReactComponent as ReactLogo} from '../assets/blogging.svg'
import './HomeWL.css'

const HomeWL = () => {
  const history = useHistory()
  return (
      <div className = "containerBox" style = {{maxWidth:"100vw",height:"100vh"}}>
      <div >
        <ReactLogo className = "svglogo"/>
      </div>
      <div>
        <div>
            <h1 className = "mb-3">User Social - one Platform</h1>
            <p>aadfnkadlfadkfkadnfkadnfkanfkanfdkad
            mfkakadnf;kadsfk;andfkadf;a</p>
            <div>
                <Button variant="outlined" className = "m-2" onClick = {() => history.push("/login")}>Log in</Button>
                <Button variant="outlined" onClick = {() => history.push("/register")}>
                Register
                </Button>
            </div>
        </div>
      </div> 
    </div>
    
  )
}

export default HomeWL
