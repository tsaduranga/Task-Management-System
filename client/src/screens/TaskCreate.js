import { Button, Card, CardContent, Grid, TextField, Toolbar, Typography } from '@mui/material'
import React, { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTask } from '../actions/taskActions'

const TaskCreate = ({history}) => {


    const [ topic, setTopic] = useState('')
    const [ description, setDescription] = useState('')

    const dispatch = useDispatch()

    const taskCreate = useSelector(state => state.taskCreate)
    const { loading, error, task } = taskCreate

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createTask(topic, description))
        alert('successfully Create a Task')
        history.push('/home')

    }




    return (
        <Grid style={{ marginTop:'50px' }}>
            <Card>
                <CardContent>
                    <form onSubmit={submitHandler}>
                    <div className='task_create_form'>
                    <Typography variant='h4' align='center' >Create a TASK</Typography>
                    <TextField id="outlined-basic" type='text' label="Task Topic" variant="outlined" className="task_field" style={{ marginTop: '50px'}} 
                     value={topic} onChange={ (e) => setTopic(e.target.value)} />

                    <TextField id="outlined-basic" type='text' label="Descrition" variant="outlined" 
                        multiline
                        rows={4}
                       placeholder="Task Description goes here.." style={{ marginTop: '50px'}} value={description} onChange={(e) => setDescription(e.target.value)} />

                    <Button type='submit' variant='contained' className="task_field" style={{ marginTop: '50px'}} >Create Task</Button>
                    </div>
                    </form>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default TaskCreate
