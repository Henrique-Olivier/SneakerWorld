var database = require("../database/config");

function historicoTempo(idUsuario) {

  var instrucaoSql = `select registroJogo.TempoEmSegundos, registroJogo.movimentos, DATE_FORMAT(dtJogo, '%d/%m/%Y') as data from registroJogo 
  join ranking on ranking.fkregistro = registroJogo.idjogo 
  where fkUsuario = ${idUsuario} 
  order by registroJogo.idJogo asc
  limit 7 `;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  historicoTempo
}
