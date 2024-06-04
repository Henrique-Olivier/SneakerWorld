var express = require("express");
var router = express.Router();

var rankingController = require("../controllers/rankingController");

router.post("/cadastrarRanking", function (req, res) {
    rankingController.cadastrarRanking(req, res);
});

router.post("/publicar", function (req, res) {
    rankingController.publicar(req, res);
});

module.exports = router;