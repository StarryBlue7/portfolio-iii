const router = require('express').Router();
const sequelize = require('../config/connection');
const { Project, Skill, Employment } = require('../models');

// api/ routes

// Get projects
router.get('/projects', async (req, res) => {
    try {
        const projectData = await Project.findAll({});
        const projects = projectData.map((project) => project.get({ plain: true }));

        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get skills
router.get('/skills', async (req, res) => {
    try {
        const skillData = await Skill.findAll({});
        const skills = skillData.map((skill) => skill.get({ plain: true }));

        res.status(200).json(skills);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get employments
router.get('/employments', async (req, res) => {
    try {
        const employmentData = await Employment.findAll({});
        const employments = employmentData.map((employment) => employment.get({ plain: true }));

        res.status(200).json(employments);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;