const { Router } = require('express')
const router = Router()
const { addAuthor,getAllAuthorDetails,getAuthor,deleteAuthor} = require('../controllers/author.controller')

// create book
router.post('/authors', addAuthor)

// get all books
router.get('/authors/:authorid', getAllAuthorDetails)

// get a book by an id

router.get("/authors/:authorid/books",getAuthor)

// delete a book by an id

router.get("/authors/:authori",deleteAuthor)




module.exports = router
