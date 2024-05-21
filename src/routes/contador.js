var express = require("express");
var router = express.Router();

var contadorController = require("../controllers/contadorController");

router.get("/contador", function (req, res) {
  contadorController.ContarMarcasFavoritas(req, res);
});

router.post("/cadastrar", function (req, res) {
  aquarioController.cadastrar(req, res);
})

module.exports = router;