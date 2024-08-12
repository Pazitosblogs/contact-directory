
const express = require('express');
const { check } = require('express-validator');
const {
  getContacts,
  addContact,
  updateContact,
  deleteContact,
} = require('../controllers/contactController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, getContacts);

router.post(
  '/',
  [auth, [check('name', 'Name is required').not().isEmpty()]],
  addContact
);

router.put('/:id', auth, updateContact);

router.delete('/:id', auth, deleteContact);

module.exports = router;
