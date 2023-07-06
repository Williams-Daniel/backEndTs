import { Request,Response } from "express"
import eBookStoreModel from "../Model/bookStore.Model"




export const UploadBook= async(req:Request,res:Response)=>{
    try {
        const {title,category,author,cost} = req.body
        const newBook = await eBookStoreModel.create({
            title,
            category,
            author,
            cost
        })

        res.status(201).json({
            message:"Upload book successfully",
            data:newBook
        })
    } catch (error) {
        res.status(400).json({
            message:"cannot upload book"
        })
    }
}