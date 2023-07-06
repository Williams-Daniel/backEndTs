import express, { Application } from "express"
import appConfig from "./app"
import dbConfig from "./Config/DataBase"

const PORT:number = 4544

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