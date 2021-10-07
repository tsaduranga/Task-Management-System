import { Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

const Task = ({task}) => {
    return (
  
            <Card style={{ backgroundColor:'#F0F8FF' }}>
                <CardContent>
                    <Typography variant='h4' color='primary' style={{ marginBottom:'20px' }}>Topic : {task.topic}</Typography>
                    <Typography variant='p' color='secondary' style={{ marginBottom:'20px' }} >Description : {task.description}</Typography>
                    <Typography variant='h4'>{task.CreateAt}</Typography>
                </CardContent>
            </Card>

    )
}

export default Task
