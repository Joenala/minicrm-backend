const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactsRouter = require('./routes/contacts');
const app = express();

const mongoUrl = process.env.MONGODB_URL;
if (!mongoUrl) throw new Error('MONGODB_URL no definido');

mongoose.connect(mongoUrl);
app.use(cors());
app.use(express.json());
app.use('/api/contacts', contactsRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
