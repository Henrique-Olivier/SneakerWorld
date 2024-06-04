var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
    SELECT idUsuario, nome, sobrenome, email, fkmarcaFavorita, min(registroJogo.TempoEmSegundos) as MenorTempo, min(registroJogo.movimentos) as MenorMovimentos FROM usuario 
    left join ranking on ranking.fkUsuario = usuario.idUsuario 
    left join registroJogo on registroJogo.idJogo = ranking.fkRegistro
    WHERE email = '${email}' AND senha = '${senha}'
    group by usuario.idUsuario
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function atualizarDados(email, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, idUsuario)
    var instrucaoSql = `
    SELECT idUsuario, nome, sobrenome, email, fkmarcaFavorita, min(registroJogo.TempoEmSegundos) as MenorTempo, min(registroJogo.movimentos) as MenorMovimentos FROM usuario 
    left join ranking on ranking.fkUsuario = usuario.idusuario 
    left join registroJogo on registroJogo.idJogo = ranking.fkRegistro
    WHERE email = '${email}' AND idUsuario = '${idUsuario}'
    group by usuario.idusuario
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, sobrenome, email, senha, favorito) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, sobrenome, email, fkmarcaFavorita, senha) VALUES ('${nome}','${sobrenome}', '${email}','${favorito}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    atualizarDados
};