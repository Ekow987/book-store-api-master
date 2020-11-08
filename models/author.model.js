 // module
const mongoose = require('mongoose')

 const authorSchema = new mongoose.Schema({
  
  authorname: { type: String, unique: true },
    rating:Number,
     book:"String",
     title:"String"
     
 })

 const Author = mongoose.model('author', authorSchema)

module.exports = Author