import { CircularProgress } from '@mui/material'
import React from 'react'

const Loading = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'center', marginTop:'100px'}}>
            <CircularProgress />
        </div>
    )
}

export default Loading
