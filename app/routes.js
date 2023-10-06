const express = require('express');
const router = express.Router();
const controller = require("./controller/index")

router.get('/gambar', controller.gambar)
router.post('/games', controller.games)

module.exports = router;