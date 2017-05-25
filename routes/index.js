const express = require('express');
const router = express.Router();
const statusController = require('../controllers/statusController');

// const { catchErrors } = require('../handlers/errorHandlers');

// Do work here
router.get('/', statusController.getStatus);

module.exports = router;
