// var aquarioModel = require("../models/aquarioModel");
var usuarioModel = require("../models/usuarioModel");
var contadorModel = require("../models/contadorModel");
var rankingModel = require("../models/rankingModel");
var historicoTempoModel = require("../models/historicoTempoModel");


function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está indefinida!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        contadorModel.ContarMarcasFavoritas()
                            .then((resultadoContador) => {
                                if (resultadoContador.length > 0) {

                                    rankingModel.MontarRanking()
                                        .then((resultadoRanking) => {

                                            res.json({
                                                id: resultadoAutenticar[0].idUsuario,
                                                email: resultadoAutenticar[0].email,
                                                nome: resultadoAutenticar[0].nome,
                                                sobrenome: resultadoAutenticar[0].sobrenome,
                                                marcaFavorita: resultadoAutenticar[0].fkmarcaFavorita,
                                                menorMovimento: resultadoAutenticar[0].MenorMovimentos,
                                                menorTempo: resultadoAutenticar[0].MenorTempo,
                                                contador: resultadoContador,
                                                ranking: resultadoRanking
                                            });
                                        })

                                } else {
                                    res.status(204).json({ aquarios: [] });
                                }

                            })
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function atualizarDados(req, res) {
    var email = req.body.emailServer;
    var idUsuario = req.body.idUsuarioServer;

    if (email == undefined) {
        res.status(400).send("Seu email está indefinida!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.atualizarDados(email, idUsuario)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        contadorModel.ContarMarcasFavoritas()
                            .then((resultadoContador) => {
                                if (resultadoContador.length > 0) {

                                    rankingModel.MontarRanking()
                                        .then((resultadoRanking) => {

                                            historicoTempoModel.historicoTempo(idUsuario)
                                                .then((resultadoHistoricoTempo) => {
                                                    res.json({
                                                        id: resultadoAutenticar[0].idUsuario,
                                                        email: resultadoAutenticar[0].email,
                                                        nome: resultadoAutenticar[0].nome,
                                                        sobrenome: resultadoAutenticar[0].sobrenome,
                                                        marcaFavorita: resultadoAutenticar[0].fkmarcaFavorita,
                                                        menorMovimento: resultadoAutenticar[0].MenorMovimentos,
                                                        menorTempo: resultadoAutenticar[0].MenorTempo,
                                                        contador: resultadoContador,
                                                        ranking: resultadoRanking,
                                                        historicoTempo: resultadoHistoricoTempo
                                                    });
                                                })

                                        })

                                } else {
                                    res.status(204).json({ aquarios: [] });
                                }

                            })
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var sobrenome = req.body.sobrenomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var favorito = req.body.favoritoServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (sobrenome == undefined) {
        res.status(400).send("Seu sobrenome está undefined!");
    } else if (favorito == undefined) {
        res.status(400).send("Seu favorito está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, sobrenome, email, senha, favorito)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar,
    atualizarDados
}