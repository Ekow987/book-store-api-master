const { Router } = require('express')
const router = Router()
const { addBook,getAllBookDetails,getBook,deleteBook} = require('../controllers/book.controller')

// create book
router.post('/book', addBook)

// get all books
router.get('/books', getAllBookDetails)

// get a book by an id

router.get("/books/:bookid",getBook)

// delete a book by an id

router.get("/books/:bookid",deleteBook)




module.exports = router
