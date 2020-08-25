const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Assesments = sequelize.define("assesment", {
        result: {
            type: Sequelize.INTEGER
        }
    })
    return Assesments;

}