var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/listar", function (req, res) {
    avisoController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    avisoController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    avisoController.pesquisarDescricao(req, res);
});

router.post("/publicar", function (req, res) {
    avisoController.publicar(req, res);
});

router.post("/cadastrarRanking", function (req, res) {
    avisoController.cadastrarRanking(req, res);
});

router.put("/editar/:idAviso", function (req, res) {
    avisoController.editar(req, res);
});

router.delete("/deletar/:idAviso", function (req, res) {
    avisoController.deletar(req, res);
});

module.exports = router;