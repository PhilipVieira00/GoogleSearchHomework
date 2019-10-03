const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({ 
    title: {type: String, required: true},
    authors: {type: String, required: true},
    description: {type: String},
    image: {type: String, required: true},
    link: {type: String, required: true}

})

const Book = mongoose.model("Books", bookSchema);

module.exports = Book;