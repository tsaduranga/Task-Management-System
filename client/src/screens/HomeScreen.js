import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listTask } from '../actions/taskActions'
import Task from '../components/Task'
import { Card, CardContent, Grid, Typography } from '@mui/material'
import { margin } from '@mui/system'
import Loading from '../components/Loading'


const HomeScreen = () => {

    const dispatch = useDispatch()
    const taskList = useSelector(state => state.taskList)
    const { loading, error, tasks } = taskList



    useEffect(() => {
        dispatch(listTask())
    }, [dispatch])

    return (

        <div>

            {loading && <Loading />}
            {error && 'error'}



            {tasks && (

                <>
                    <div  style={{ margin: '20px', padding: '10px'}}>

                        {
                            tasks.map((task) => (
                                <Grid md={12} style={{ marginTop: '30px'}} >
                                    <Task task={task} />
                                </Grid>
                            ))

                        }


                    </div>
                </>

            )}


        </div>

    )
}

export default HomeScreen
