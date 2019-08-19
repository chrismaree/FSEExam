//This simple serverless API lets you get sneakers from the serverless interface.
const fetch = require("node-fetch");
require('dotenv').config()

module.exports = async (req, res) => {
    const sneakers = await fetch(`https://www.jsonstore.io/${process.env.DB_URL}/sneakers`)
        .then(function (response) {
            return response.json();
        })
    res.status(200).send(sneakers.result)
}