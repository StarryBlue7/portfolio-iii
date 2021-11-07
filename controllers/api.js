const router = require('express').Router();
const sequelize = require('../config/connection');
const { Project, Skill, Employment } = require('../models');

// api/ routes

// Get projects
router.get('/projects', async (req, res) => {
    res.json('Projects data')
});

// Get skills
router.get('/skills', async (req, res) => {
    res.json('Skills data')
});

// Get employments
router.get('/employments', async (req, res) => {
    res.json('Employment data')
});

module.exports = router;