const multer = require('multer');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({

    destination: function (req, file, cb) {

        if (!fs.existsSync('public')) {
            fs.mkdirSync('public');
        }

        if (!fs.existsSync('public/videos')) {
            fs.mkdirSync('public/videos');
        }
        
        cb(null, 'public/videos');
    },

    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname.replace(/ /g,"_"));
    }

})

const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        if (ext !== '.mkv' && ext !== '.mp4') {
            return cb(new Error('Only videos are allowed.'))
        }
        cb(null, true);
    }
})

module.exports = upload;