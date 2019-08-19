//This simple serverless API lets you add new sneakers to the json database

const fetch = require("node-fetch");
require('dotenv').config()

module.exports = async (req, res) => {
    fetch(`https://www.jsonstore.io/${process.env.DB_URL}/sneakers/${req.body.index}`, {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(req.body.sneaker),
    }).then(function () {
        res.status(200).send({
            status: "OK!"
        })
    })
}