// module
const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
 author: String,
 title: { type: String, unique: true },
 // pubDate: Date,
 publisher: String,
 summary: { type: String, maxlength: 500 },
 pages: { type: Number, minlength: 10},
 ISBN: { type: Number, minlength: 9, maxlength: 15 }
})

const Book = mongoose.model('book', bookSchema)

module.exports = Book