// src/controllers/bookController.js

const Book = require('../models/Book');
const fs = require('fs');
const path = require('path');

// Controller functions
const getAllBooks =  async (req, res) => {
    const { category } = req.query; // Using req.query to get category from query parameters
  
    try {
        let books = await Book.find();
        if(category) books = await Book.find({ genre: category }); // Assuming 'genre' is the field for category/genre in your Book model
        console.log(category)
        res.status(200).json(books);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}

const createBook = async (req, res) => {
  const { title, author, genre } = req.body;
  const newBook = new Book({ title, author, genre });

  try {
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Function to load books from JSON files into MongoDB
const loadBooks = async (req, res) => {
  const booksDir = path.join(__dirname, '../books');

  try {
    const files = fs.readdirSync(booksDir);

    for (const file of files) {
      const filePath = path.join(booksDir, file);
      const books = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

      for (const bookData of books) {
        const book = new Book(bookData);
        await book.save();
      }
    }

    res.status(200).json({ message: 'Books loaded successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
    getAllBooks,
    createBook,
    loadBooks
}

