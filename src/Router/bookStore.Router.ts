import express, { Router } from "express"
import { UploadBook } from "../Controller/bookStore.Controller"

const router:Router = express.Router()

router.post("/upload",UploadBook)

export default router