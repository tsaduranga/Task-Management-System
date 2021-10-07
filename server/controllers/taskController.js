
import asyncHandler from 'express-async-handler'
import Task from '../models/taskModel.js'
// import generateToken from '../utils/generateToken.js'
// import User from '../models/userModel.js'




const registerTask = asyncHandler(async (req, res) => {
  

  const { topic, description } = req.body
  const user = req.user._id

  const task = await Task.create({ topic, description, user })

  if (task) {
    res.json({task})
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})


const userBelongTasks = asyncHandler(async(req, res) => {
  const user = req.user._id

  // res.json(user)

  const tasks = await Task.find({user})

  res.json(tasks)

})

  


export {
    registerTask,
    userBelongTasks
}
