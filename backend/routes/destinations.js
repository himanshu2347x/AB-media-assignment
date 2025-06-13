const express = require('express');
const router = express.Router();
const {
    getDestinations,
    getDestinationById,
    createDestination
} = require('../controllers/destinationController');

// GET all destinations
router.get('/', getDestinations);

// GET single destination
router.get('/:id', getDestinationById);

// POST new destination
router.post('/', createDestination);

module.exports = router;
