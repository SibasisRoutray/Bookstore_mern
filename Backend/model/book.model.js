import mongoose from "mongoose"

const bookSchema=mongoose.Schema({
    id:Number,
    name:String,
    category:String,
    description:String,
    imagesrc:String,
   
})

const Book=mongoose.model("Book",bookSchema);

export default Book;