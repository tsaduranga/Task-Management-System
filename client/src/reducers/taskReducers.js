import { TASK_CREATE_FAIL, TASK_CREATE_REQUEST, TASK_CREATE_SUCCESS, TASK_LIST_FAIL, TASK_LIST_REQUEST, TASK_LIST_SUCCESS } from "../constants/taksConstants";


export const taskCreateReducer = ( state= '', action) => {
    switch (action.type) {
        case TASK_CREATE_REQUEST:
            return { loading: true}
        case TASK_CREATE_SUCCESS:
            return { loading : false , task : action.payload}
        case TASK_CREATE_FAIL:
            return { loading: false, error : action.payload}
        default:
            return state
    }
}


export const taskListReducer = (state = '', action) => {
        switch (action.type) {
            case TASK_LIST_REQUEST:
                return { loading : true}
            case TASK_LIST_SUCCESS:
                return { loading: false, tasks : action.payload }
            case TASK_LIST_FAIL:
                return { loading: false, error : action.payload}
            default:
                return state;
        }
}