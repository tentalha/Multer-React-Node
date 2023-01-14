const { getAll, createMedia } = require('../controller/mediaController');
const upload = require('../middlewares/upload');

const router = require('express').Router();


router.get('/', getAll);

router.post('/create', upload.single('video'), createMedia)

module.exports = router;