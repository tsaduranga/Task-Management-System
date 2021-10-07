import express from 'express'
const router = express.Router()
import {
  registerTask,
  userBelongTasks
} from '../controllers/taskController.js'

import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').post(protect,registerTask).get(protect,userBelongTasks)


export default router
