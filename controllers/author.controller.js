const Author = require('../models/author.model')

const authorCtrl = {}

// create = post
authorCtrl.addAuthor = async (req, res) => {
 const { rating,title,book } = req.body

 try {

  let author = await Author.create({ book, title,rating})

  res.status(201).json({ author })

 } catch (err) {
  res.status(400).send(err)
 }
}

// read = get
authorCtrl.getAllAuthorDetails=async(req,res)=>{
    try {
      let result=await Author.find({})
    res.status(201).send(result)
    } catch (error) {
      
      res.status(404).send({message:'failed',error})
    }
  
  }

//get a book by id

authorCtrl.getAuthor= async(req,res)=>{
    const {title,rating,book} = req.body
    try {
     let result =  await Author.findOne({_id:req.params}, {title,rating,book})
     res.status(200).send(result)
    } catch (error) {
     
      res.status(404).send({message:"user not found",error})
    }
 }
 

// delete a book

authorCtrl.deleteAuthor=async(req,res)=>{
    try {
      await Author.findByIdAndDelete({_id:req.param})
    res.status(200).send({message:"User deleted sucessfully"})
    } catch (error) {
      
     res.status(404).send("User not deleted" ,error)
    }
  }
  
 



module.exports = authorCtrl