import mongoose from "mongoose"
import { DB_CONN_STRING, DB_NAME } from "./config/env.config"

//deprecation warn
mongoose.set( 'strictQuery', false )

const connectDb = async (): Promise<void> => {
    try {
        await mongoose.connect( DB_CONN_STRING )
        console.log( 'Connected to mongoose', DB_NAME )
    } catch ( error ) {
        console.error( error )
        process.exit( 1 )
    }
}

export default connectDb



