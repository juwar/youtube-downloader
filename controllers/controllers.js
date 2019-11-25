const _ = require('lodash')
const response = require('../response')
const fs = require('fs')
const ytdl = require('ytdl-core')

exports.ok = function (req, res) {
    response.ok('OK', res);
}

exports.postDownload = (req, res) => {

    //------------------------------DEKLARATION------------------------------//
    let url = req.body.url;
    // let url = 'https://www.youtube.com/watch?v=V1-zPB4rsXk'
    //------------------------------DEKLARATION------------------------------//

    ytdl(url, { filter: (format) => format.container === 'mp4' })
        .pipe(fs.createWriteStream('video.mp4'));

    res.json({
        status: 200,
        message: 'OK'
    })
}

exports.getDownload = async (req, res) => {

    //------------------------------DEKLARATION------------------------------//
    let id = req.query.v
    let url = 'https://www.youtube.com/watch?v=' + id;
    let format = 'mp4'
    let name = ''
    let title = ''
    // let url = 'https://www.youtube.com/watch?v=V1-zPB4rsXk'
    //------------------------------DEKLARATION------------------------------//

    await ytdl.getInfo(id, (err, info) => {
        title = info.title
        name = title + '.' + format

        console.log(name)

        ytdl(url, { filter: (format) => format.container === 'mp4' })
            .pipe(fs.createWriteStream(name));
    });

    // name = title + '.' + format

    // ytdl(url, { filter: (format) => format.container === 'mp4' })
    //     .pipe(fs.createWriteStream(name));

    res.json({
        status: 200,
        message: 'OK'
    })
}