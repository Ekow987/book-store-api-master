const User = require ('../models/user.model')


//create ur control object
const userControl={}

//Add functions to your object
//NB
//CRUD
// use asyn and await to run multiple functions
// use try and catch to catch errors
// remember ur API res,req
userControl.createUser= async(req,res)=>{
  try {
    let newUser = new User(req.body)
    console.log(newUser)
     let result= await newUser.save()
      res.status(200).send({message:'message sent successfully' ,result})
  } catch (error) {
  
    res.status(404).send({message:'bad request',error})
  }
}

userControl.getAllUserDetails=async(req,res)=>{
  try {
    let result=await User.find({})
  res.status(201).send(result)
  } catch (error) {
    
    res.status(404).send({message:'failed',error})
  }

}

userControl.getUser= async(req,res)=>{
   try {
    let result =  await User.findOne({username:req.params.username})
    res.status(200).send(result)
   } catch (error) {
    
     res.status(404).send({message:"user not found",error})
   }
}

userControl.updateUser=async(req,res)=>{
   const {username,password,email} = req.body
 try {
  let result = await User.findOneAndUpdate({_id:req.params}, {username,password,email})
  res.status(200).send(result)
 } catch (error) {

   res.status(404).send({message:"user not updated",error})
 }
}

userControl.deleteUser=async(req,res)=>{
  try {
    await User.findByIdAndDelete({_id:req.param})
  res.status(200).send({message:"User deleted sucessfully"})
  } catch (error) {
    
   res.status(404).send("User not deleted" ,error)
  }
}

module.exports=userControl




