//simple script to port data to jsonstore.io from the provided json object of sneakers

require('dotenv').config()
const fetch = require("node-fetch");

function main() {
    var fs = require('fs');
    const sneakers = JSON.parse(fs.readFileSync('./resources/my_sneakers.json', 'utf8'));
    console.log("Begin porting sneakers...")
    fetch(`https://www.jsonstore.io/${process.env.DB_URL}/sneakers`, {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(sneakers),
    }).then(function (res) {
        console.log("porting sneakers done!")
    })
}
main()