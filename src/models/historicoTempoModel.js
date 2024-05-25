var database = require("../database/config");

function historicoTempo(idUsuario) {

  var instrucaoSql = `select registroJogo.tempoEmSegundos, registroJogo.movimentos, DATE_FORMAT(dtJogo, '%d/%m/%Y') as data from registroJogo 
  join ranking on ranking.fkregistro = registrojogo.idjogo 
  where fkUsuario = ${idUsuario} 
  order by registrojogo.idjogo asc
  limit 7 `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  historicoTempo
}
