const router = require('express').Router();
const sequelize = require('../config/connection');

// Get main portfolio page
router.get('/', async (req, res) => {
    res.json('Homepage')
});

// Get project portfolio page
router.get('/projects', async (req, res) => {
    res.json('Projects page')
});

// Get resume page
router.get('/resume', async (req, res) => {
    res.json('Resume page')
});

module.exports = router;