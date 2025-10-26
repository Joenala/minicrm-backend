const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String
});
const Contact = mongoose.model('Contact', contactSchema);

router.get('/', async (req, res) => {
  const list = await Contact.find();
  res.json(list);
});
router.post('/', async (req, res) => {
  const c = new Contact(req.body);
  await c.save();
  res.status(201).json(c);
});
router.put('/:id', async (req, res) => {
  const c = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(c);
});
router.delete('/:id', async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router
