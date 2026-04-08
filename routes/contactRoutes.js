const express =require('express');
const { getContacts, createContacts, updateContacts, getContact, deleteContact } = require('../controllers/contactControllers');
const router =express.Router();

router.route('/').get(getContacts);

router.route('/').post(createContacts);

router.route('/:id').put(updateContacts)

router.route('/:id').get(getContact)

router.route('/:id').delete(deleteContact)


module.exports=router;