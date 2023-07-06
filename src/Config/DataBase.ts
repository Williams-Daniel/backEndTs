import mongoose from "mongoose"
import envVariables from "./envVariable"

const URL= envVariables.DATABASE

async function dbConfig(){
    try {
        const conn = await mongoose.connect(URL)

        console.log("connected:",conn.connection.host)
    } catch (error) {
        console.log(error)
    }
}

export default dbConfig