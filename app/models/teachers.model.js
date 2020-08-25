module.exports = (sequelize, Sequelize) => {
    const Teacher = sequelize.define("teacher", {
        name: {
            type: Sequelize.STRING,
        },
        gender: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        }
    });
    return Teacher;
};