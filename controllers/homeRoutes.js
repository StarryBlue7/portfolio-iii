const router = require('express').Router();
const path = require('path');

// Get main portfolio page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

// Get project portfolio page
router.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/projects.html'));
});

// Get resume page
router.get('/resume', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/resume.html'));
});

module.exports = router;