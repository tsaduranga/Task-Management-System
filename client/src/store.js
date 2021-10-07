import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { taskCreateReducer, taskListReducer } from './reducers/taskReducers'
import { userLoginReducer , userRegisterReducer } from './reducers/userReducers'


const middelware = [thunk]

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
    userLogin : { userInfo : userInfoFromStorage}
}


const reducer = combineReducers({
    userLogin :  userLoginReducer,
    userRegister : userRegisterReducer,

    //taks
    taskCreate : taskCreateReducer,
    taskList : taskListReducer,
})



const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middelware))
)

export default store