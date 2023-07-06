import express, { Application } from "express"
import cors from "cors"

function appConfig(app:Application){
    app.use(express.json()).use(cors())
}

export default appConfig