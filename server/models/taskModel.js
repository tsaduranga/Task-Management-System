import mongoose from 'mongoose'


const taskSchema = mongoose.Schema({
    topic : { type: String, required: true},
    description : { type:String, required: true},
    user : { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required : true
    }
}, {
    timestamps: true
})


const Task = mongoose.model('Task', taskSchema)

export default Task