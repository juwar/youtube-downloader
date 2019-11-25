// import library
// require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const port = 9000;

// import route
const route = require('./routes/routes')

const app = express()
// const port = process.env.PORT

/*
 * Izinkan CORS
 * apa itu CORS?
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
 */
// Add headers
// const allowCrossDomain = function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://156.67.214.38');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     if ('OPTIONS' == req.method) {
//         res.send(200);
//     }
//     else {
//         next();
//     }
// };

// app.use(allowCrossDomain)

// set bodyParser sebagai middleware yang akan memparsing body request
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


// set route
route(app)

app.get('/', (request, response) => {
    return response.end('API Working')
})

// jika route tidak ditemukan
app.use((request, response, next) => {
    response.status(404).send('<h2 align=center>Page not found!</h2>')
})

// start server
app.listen(port, () => {
    console.log(`App Server Listening at ${port}`)
})