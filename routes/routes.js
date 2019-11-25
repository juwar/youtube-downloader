'use strict'

module.exports = function(app){
const controller = require('../controllers/controllers')

app.post('/download', controller.postDownload)
app.get('/watch', controller.getDownload)

}