const sequelize = require('../config/connection');
const { Project, Skill, Employment } = require('../models');

const projectData = require('./projectData.json');
const skillData = require('./skillData.json');
const employmentData = require('./employmentData.json');

// Add data to db
const addData = async () => {
    await sequelize.sync({ force: true });

    // Add projects
    await Project.bulkCreate(projectData, {
        individualHooks: true,
        returning: true,
    });

    // Add skills
    await Skill.bulkCreate(skillData, {
        individualHooks: true,
        returning: true,
    });

    // Add employments
    await Employment.bulkCreate(employmentData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

addData();