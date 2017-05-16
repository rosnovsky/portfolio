const express = require('express');
const router = express.Router();
const statusController = require('../controllers/statusController');
const portfolioController = require('../controllers/portfolioController');

// const { catchErrors } = require('../handlers/errorHandlers');

// Do work here
router.get('/', portfolioController.getPortfolio);
router.get('/resume', portfolioController.getResume);
router.get('/status', statusController.getStatus);



module.exports = router;
