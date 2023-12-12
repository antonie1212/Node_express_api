const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: true, msg: 'Show all bootcamps' });
});

router.get('/:id', (req, res) => {
  res.status(200).json({ message: true, msg: `get the  id ${req.params.id}` });
});

router.post('/', (req, res) => {
  res.status(200).json({ message: true, msg: 'Create a new bootcamp' });
});

router.put('/:id', (req, res) => {
  res.status(200).json({ message: true, msg: `update an id ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res
    .status(200)
    .json({ message: true, msg: `Delete the id ${req.params.id}` });
});

module.exports = router;
