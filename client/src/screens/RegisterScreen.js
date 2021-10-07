import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../actions/userActions'

const RegisterScreen = () => {

    const [ name , setName] = useState('')
    const [ email , setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [ confirmPassword, setConfirmPassword] = useState('')


    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)
    const { loading, error, userInfo} = userRegister



    const registerHandler = (e) => {
        e.preventDefault()

        if(password == confirmPassword){
            //dispatch
            dispatch(registerUser(name, email, password))

        }else{
            alert('Passwords Not matchs')
        }

    }


    return (

        <Grid >

            { loading && 'loading ....'}
            { error}

            



            <form onSubmit={registerHandler} >


                <div className="login" style={{ marginTop:'80px'}}>
                    <Typography variant='h4' color='primary'  align='center' >Register</Typography>
                    <TextField label="Name" type='text' variant='standard' className='login_field' style={{ marginTop:'20px'}}
                             value={name}  onChange={(e) => setName(e.target.value)} />
                    <TextField label="email" type='email' variant='standard' className='login_field' style={{ marginTop:'20px'}}
                             value={email}  onChange={(e) => setEmail(e.target.value)} />
                    <TextField label="password" type='password' variant='standard' className='login_field' style={{ marginTop:'20px'}} 
                            value={password} onChange={(e)=> setPassword(e.target.value)}    />
                    <TextField label="confirm password" type='password' variant='standard' className='login_field' style={{ marginTop:'20px'}} 
                            value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}    />
                    <Button type='submit' variant='contained' className='login_field' style={{ marginTop:'50px'}} >Sign Up</Button>
                </div>
            </form>
        </Grid>
    )
}

export default RegisterScreen
