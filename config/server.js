/*Copyright © 2022 Mateus Felipe da Silveira Vieira*/

/*

Este arquivo é parte do programa Ing-blog

Ing-blog é um software livre; você pode redistribuí-lo e/ou
modificá-lo dentro dos termos da Licença Pública Geral GNU como
publicada pela Free Software Foundation (FSF); na versão 3 da
Licença, ou (a seu critério) qualquer versão posterior.

Este programa é distribuído na esperança de que possa ser útil,
mas SEM NENHUMA GARANTIA; sem uma garantia implícita de ADEQUAÇÃO
a qualquer MERCADO ou APLICAÇÃO EM PARTICULAR. Veja a
Licença Pública Geral GNU para maiores detalhes.

Você deve ter recebido uma cópia da Licença Pública Geral GNU junto
com este programa, Se não, veja <http://www.gnu.org/licenses/>.

*/

const express = require("express")

/*executar o express*/
const run_express = express()

/*definir a porta do servidor*/
const porta = process.env.PORT || 7777

/*definir a pasta dos assests (css, images,etc)*/
run_express.use(express.static("./assets/"))
/*configurar o express para receber dados dos formulários*/
/*run_express.use(express.urlencoded({extended:false}))*/

/*carregar o consign e configura-lo*/
const consign = require("consign")
consign().include("./routes").into(run_express)

/*definir uma pasta diferente da views para armazenar os conteúdos*/
/*run_express.set("views","documentos")*/

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something wrong is not right');
  });

/*exportar as variáveis run_express e porta*/
module.exports = {run_express,porta}