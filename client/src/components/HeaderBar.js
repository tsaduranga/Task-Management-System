import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { logout} from '../actions/userActions'

import { useSelector, useDispatch } from 'react-redux';

const HeaderBar = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

   const logoutHandler =  () => {
        dispatch(logout())
   }



    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
                            TASKS
                        </Typography>
                        {userInfo ? (
                            <>
                                <Button color="inherit" component={Link} to='/home' >Home</Button>
                                <Button color="inherit" component={Link} to='/task/create' >Create</Button>
                                <Button color="inherit" onClick={logoutHandler} >Logout</Button>
                            </>
                        ) : (
                            <>
                                <Button color="inherit" component={Link} to='/login' >Login</Button>
                                <Button color="inherit" component={Link} to='/register' >Register</Button>
                            </>
                        )}


                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default HeaderBar
