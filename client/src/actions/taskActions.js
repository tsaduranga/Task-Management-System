import axios from "axios"
import { TASK_CREATE_FAIL, TASK_CREATE_REQUEST, TASK_CREATE_SUCCESS, TASK_LIST_FAIL, TASK_LIST_REQUEST, TASK_LIST_SUCCESS } from "../constants/taksConstants"

export const createTask = (topic, description) => (dispatch, getState) => {

    try {

        dispatch({
            type: TASK_CREATE_REQUEST
        })


        const {
            userLogin: { userInfo },
          } = getState()


        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = axios.post('/api/tasks', { topic, description }, config)
        
        // const data = userInfo.token
        dispatch({
            type: TASK_CREATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TASK_CREATE_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }

}


export const listTask = () => async (dispatch, getState) => {

    try {
        dispatch({
            type:TASK_LIST_REQUEST
        })

        const {
            userLogin: { userInfo },
          } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data}  = await axios.get('/api/tasks', config)

        dispatch({
            type: TASK_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TASK_LIST_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }

}