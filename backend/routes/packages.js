const express = require('express');
const router = express.Router();
const {
    getTopSellingPackages,
    getPackageById,
    createPackage
} = require('../controllers/packageController');

// GET top-selling packages
router.get('/top-selling', getTopSellingPackages);

// GET single package
router.get('/:id', getPackageById);

// POST new package
router.post('/', createPackage);

module.exports = router;
