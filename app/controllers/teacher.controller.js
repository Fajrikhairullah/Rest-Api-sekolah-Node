const db = require("../models");
const Model = db.students;
const Op = db.Sequelize.Op;

exports.addOne = (req, res) => {
    Model.create(req.body).then((data) => {
        res.status(200).send({
            message: "Succesed !",
            data: data
        });
    });
};

exports.findAll = (req, res) => {
    Model.findAll().then(data => {
        res.send({
            data: data
        })
    });
};

exports.findById = (req, res) => {
    const id = req.params.id;
    Model.findByPk(id);
};

exports.updateById = (req, res) => {
    const id = req.params.id;
    Model.update(req.body, { where: id });
};

exports.deleteById = (req, res) => {
    const id = req.params.id;
    Model.destroy(id);
};