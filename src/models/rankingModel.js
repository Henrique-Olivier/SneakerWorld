var database = require("../database/config");

function MontarRanking() {

  var instrucaoSql = `select usuario.nome as Nome, registrojogo.tempoemsegundos as Tempo, registroJogo.movimentos as Movimentos, DATE_FORMAT(ranking.dtJogo, '%d/%m/%Y') as data from ranking 
  join usuario on ranking.fkUsuario= usuario.idusuario 
  join registroJogo on ranking.fkRegistro = registrojogo.idjogo
  order by tempo asc
  limit 10;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  MontarRanking
}
