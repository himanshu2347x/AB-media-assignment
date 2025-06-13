const Package = require('../models/package');

// @desc    Get all top-selling packages
// @route   GET /api/packages/top-selling
// @access  Public
const getTopSellingPackages = async (req, res) => {
    try {
        const packages = await Package.find()
            .sort({ sold: -1, rating: -1 }) // Sort by number of sales and then by rating
            .limit(6); // Limit to top 6 packages
        res.json(packages);
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
            message: error.message
        });
    }
};

// @desc    Get a single package
// @route   GET /api/packages/:id
// @access  Public
const getPackageById = async (req, res) => {
    try {
        const package = await Package.findById(req.params.id);

        if (!package) {
            return res.status(404).json({
                success: false,
                error: 'Package not found'
            });
        }

        res.json(package);
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error',
            message: error.message
        });
    }
};

// @desc    Create a package
// @route   POST /api/packages
// @access  Private
const createPackage = async (req, res) => {
    try {
        const package = await Package.create(req.body);
        res.status(201).json(package);
    } catch (error) {
        res.status(400).json({
            success: false,
            error: 'Invalid Data',
            message: error.message
        });
    }
};

module.exports = {
    getTopSellingPackages,
    getPackageById,
    createPackage
};
