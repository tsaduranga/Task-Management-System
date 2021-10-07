import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../actions/userActions'
import loading from '../components/Loading'

const LoginScreen = ({history}) => {

    const [ email , setEmail] = useState('')
    const [password, setPassword] = useState('')


    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { loading, userInfo, error} = userLogin


    useEffect(() => {

        if(userInfo){
            history.push('/home')
        }

    },[history, userInfo])




    const loginHandler = (e) => {
        e.preventDefault()
        dispatch(loginUser(email, password))

    }


    return (

        <Grid >
            <form onSubmit={loginHandler} >


                { loading && <loading />}
                { error && 'errorrrrrrrrrrrrrcrrrrrrrrrrr'}
       
            
                <div className="login" style={{ marginTop:'80px'}}>
                    <Typography variant='h4' color='primary'  align='center' >Login</Typography>
                    <TextField label="email" type='email' variant='standard' className='login_field' style={{ marginTop:'20px'}}
                             value={email}  onChange={(e) => setEmail(e.target.value)} />
                    <TextField label="password" type='password' variant='standard' className='login_field' style={{ marginTop:'20px'}} 
                            value={password} onChange={(e)=> setPassword(e.target.value)}    />
                    <Button type='submit' variant='contained' className='login_field' style={{ marginTop:'50px'}} >Sign In</Button>
                </div>
            </form>
        </Grid>
    )
}

export default LoginScreen
