const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bookRouter = require('./routes/books');
const authRouter = require('./routes/auth');
const errorHandler = require('./middlewares/errorHandler');
const punycode = require('punycode/');


const app = express();

app.use(express.json());
app.use(morgan('dev'));

mongoose.connect('mongodb://localhost:27017/bookdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/auth', authRouter);
app.use('/api', bookRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));