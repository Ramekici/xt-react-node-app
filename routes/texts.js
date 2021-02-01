const express = require('express');
const TextController = require('../controllers/texts');
const router = express.Router();


router.get('/', TextController.getText);
router.get('/:name', TextController.getFileIn);
router.post('/create', TextController.createText);


module.exports = router;
