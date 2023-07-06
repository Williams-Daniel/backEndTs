import express, { Application } from "express"
import appConfig from "./app"
import dbConfig from "./Config/DataBase"
import envVariables from "./Config/envVariable"

const PORT = envVariables.PORT

const app:Application = express()

const server = async ()=>{
    try {
        await dbConfig()
        appConfig(app)
        app.listen(PORT,()=>{
            console.log("server is listening on port:",PORT)
        })
    } catch (error) {
        console.log(error)
    }
}

server()