const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    authors: [{ type: String, required: true }],
    synopsis: String,
    date: { type: Date, default: Date.now },
    thumbnail: { type: String },
    link: String
});

const Book = mongoose.model("Book", bookSchema);

module.export = Book;