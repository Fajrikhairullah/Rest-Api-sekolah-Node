const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Students = sequelize.define("siswa", {
        name: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.STRING
        },
        class: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING

        }


    })
    return Students;
}