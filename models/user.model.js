const mongoose = require('mongoose')
 const bcrypt = require('bcrypt')
 const {isEmail}=require('validator')

const Schema = mongoose.Schema


const userSchema=new Schema({
    username:{
        type:"String",
        unique:[true, "username already taken"],
        minlength:[10, "minimum lenth is 10"],
        required:[true,"Please enter your username"],
    },
    password:{
        type:"String",
        minlength:[5, "minimum lenth is 5"],
         required:[true,"Please enter your password"],
        },
    email:{
        type:"String",
        unique:[true, "Email already entered"],
        required:[true,"Please enter your password"],
        validator:[isEmail, "you need to input the right email"]
    }
})

// mongoose middleware

userSchema.pre('save', async function(next) {
  const salt=   await bcrypt.genSalt()
    this.Password =  await bycrpt.hash(this.Password,salt)
    next()
} )

const User = mongoose.model('users' ,userSchema)

module.exports=User


