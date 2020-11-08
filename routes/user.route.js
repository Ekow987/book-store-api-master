const {Router} = require ("express")

const router = Router()
// import ur controller function

const {createUser,getAllUserDetails,updateUser,deleteUser,getUser} = require("../controllers/user.controller")

// set ur route using crud
    //create = post
router.post("/api/create-user" ,createUser)
   //read= get
   //get all users
router.get("/api/find-users" ,getAllUserDetails)
 // get user
 router.get("/api/find-user:username",getUser)
  //update=put
router.put("/api/edit-user:id" ,updateUser)
  // delete = delete
router.delete("/api/remove-user:id" ,deleteUser)

module.exports= router


