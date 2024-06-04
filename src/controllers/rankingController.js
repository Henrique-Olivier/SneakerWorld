var cadastrarRankigModel = require("../models/cadastrarRankingModel");

function cadastrarRanking(req, res) {
    var registro = req.body.idRegistroServer;
    var usuario = req.body.idUsuarioServer;

    if (registro == undefined) {
        res.status(400).send("O título está indefinido!");
    } else if (usuario == undefined) {
        res.status(400).send("A descrição está indefinido!");
    } else {
        cadastrarRankigModel.cadastrarRanking(registro, usuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao cadastrar no ranking", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function publicar(req, res) {
    var movimentos = req.body.movimentosServer;
    var tempo = req.body.tempoServer;

    if (tempo == undefined) {
        res.status(400).send("O título está indefinido!");
    } else if (movimentos == undefined) {
        res.status(400).send("A descrição está indefinido!");
    } else {
        cadastrarRankigModel.publicar(movimentos, tempo)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}



module.exports = {
    cadastrarRanking,
    publicar
}