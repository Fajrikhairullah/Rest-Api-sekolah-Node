const express = require("express");
const bodyParser = require("body-parser");
const teacher = require("./app/routers/teacher.router")
const app = express();

// let whiteList = [
//     'http://localhost:8081'
// ]
// let corsOption = {
//     origin: function (origin, callback) {
//         if (whiteList.indexOf(origin) !== -1 || !origin) {
//             callback(null, true);
//         } else {
//             callback(new Error('not allowed by CORS'))
//         }
//     }
// }

//sync db//
const db = require("./app/models");
db.sequelize.sync();

// app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/teacher", teacher);

// app.get("/", (req, res) => {
//     res.json({
//         message: "Selamat !!!"
//     });

// });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`server is runing pn http://localhost:${PORT}`)
})