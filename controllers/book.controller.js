const Book = require('../models/book.model')

const bookCtrl = {}

// create = post
bookCtrl.addBook = async (req, res) => {
 const { author, title, publisher, summary, pages, ISBN } = req.body

 try {

  let book = await Book.create({ author, title, publisher, summary, pages, ISBN })

  res.status(201).json({ book })

 } catch (err) {
  res.status(400).send(err)
 }
}

// read = get
bookCtrl.getAllBookDetails=async(req,res)=>{
    try {
      let result=await Book.find({})
    res.status(201).send(result)
    } catch (error) {
      
      res.status(404).send({message:'failed',error})
    }
  
  }

//get a book by id

bookCtrl.getBook= async(req,res)=>{
    const {title,author,publisher} = req.body
    try {
     let result =  await Book.findOne({_id:req.params}, {title,author,publisher})
     res.status(200).send(result)
    } catch (error) {
     
      res.status(404).send({message:"user not found",error})
    }
 }
 

// delete a book

bookCtrl.deleteBook=async(req,res)=>{
    try {
      await Book.findByIdAndDelete({_id:req.param})
    res.status(200).send({message:"User deleted sucessfully"})
    } catch (error) {
      
     res.status(404).send("User not deleted" ,error)
    }
  }
  
 



module.exports = bookCtrl