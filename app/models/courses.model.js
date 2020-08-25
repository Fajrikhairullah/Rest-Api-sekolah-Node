module.exports = (sequelize, Sequelize) => {
    const Studies = sequelize.define("studies", {
        name: {
            type: Sequelize.STRING
        },
        bab: {
            type: Sequelize.INTEGER
        },
        describtion: {
            type: Sequelize.STRING
        }
    });
    return Studies;
};