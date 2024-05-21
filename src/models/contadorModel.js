var database = require("../database/config");

function ContarMarcasFavoritas() {

  var instrucaoSql = `select marca.nome , count(usuario.fkMarcaFavorita) as contador from marca join usuario on usuario.fkmarcafavorita = marca.idmarca group by marca.nome;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
    ContarMarcasFavoritas
}
