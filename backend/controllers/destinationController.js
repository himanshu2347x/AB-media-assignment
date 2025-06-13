const Destination = require('../models/destination');

// @desc    Get all destinations
// @route   GET /api/destinations
// @access  Public
const getDestinations = async (req, res) => {
    try {
        const destinations = await Destination.find().sort({ createdAt: -1 });
        res.json(destinations);
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
            message: error.message
        });
    }
};

// @desc    Get a single destination
// @route   GET /api/destinations/:id
// @access  Public
const getDestinationById = async (req, res) => {
    try {
        const destination = await Destination.findById(req.params.id);

        if (!destination) {
            return res.status(404).json({
                success: false,
                error: 'Destination not found'
            });
        }

        res.json(destination);
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
            message: error.message
        });
    }
};

// @desc    Create a new destination
// @route   POST /api/destinations
// @access  Private
const createDestination = async (req, res) => {
    try {
        const { name, image } = req.body;

        if (!name || !image) {
            return res.status(400).json({
                success: false,
                error: 'Please provide name and image'
            });
        }

        const destination = await Destination.create({
            name,
            image
        });

        res.status(201).json(destination);
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
            message: error.message
        });
    }
};

module.exports = {
    getDestinations,
    getDestinationById,
    createDestination
};
