import express, { Application } from "express"
import cors from "cors"
import router from "./Router/bookStore.Router"

function appConfig(app:Application){
    app.use(express.json()).use(cors()).use("/api",router
    )
}

export default appConfig