const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    minlength: [2, 'Title must be at least 2 characters'],
  },
  author: {
    type: String,
    required: [true, 'Author is required'],
    trim: true,
  },
  publishedYear: {
    type: Number,
    min: [1450, 'Published year seems invalid'],
    max: [new Date().getFullYear(), 'Published year cannot be in the future'],
  },
  genres: {
    type: [String],
    validate: {
      validator: (arr) => arr.length > 0,
      message: 'At least one genre is required',
    },
  },
  available: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model('Book', bookSchema);