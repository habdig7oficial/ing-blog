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

/*exportar as variáveis run_express e porta*/
module.exports = {run_express,porta}