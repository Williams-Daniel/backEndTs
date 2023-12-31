import mongoose from "mongoose";

export interface eBookStore{
    title:string,
    author:string,
    category:string,
    cost:string
}

  interface ibook extends eBookStore, mongoose.Document {}

  const eBookStoreSchema = new mongoose.Schema({
    title:{
        type:String
    },
    author:{
        type:String
    },
    category:{
        type:String
    },
    cost:{
        type:String
    }
  },{timestamps:true})

  const eBookStoreModel = mongoose.model<ibook>("eBookStore",eBookStoreSchema)

  export default eBookStoreModel

  