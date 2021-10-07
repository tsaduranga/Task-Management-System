import mongoose from 'mongoose'

const connectDB = async () => {

    const MONGO_URI = 'mongodb+srv://thisaru123:thisaru123@mernshop.j3pbj.mongodb.net/todo?retryWrites=true&w=majority'

  try {
    const conn = await mongoose.connect( MONGO_URI , {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    //   useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB