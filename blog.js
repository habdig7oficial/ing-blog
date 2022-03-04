/*carregando as configurações do servidor*/
const servidor = require('./config/server')
/*carregar o valor de run_express*/
let run_express = servidor.run_express
/*carregar o valor de porta*/
let porta = servidor.porta

/*carregar a rota index.js*/
/*let index = require('./routes/index')(run_express)*/
/*carregar a rota contato.js*/
/*let contato = require('./routes/contato')(run_express)*/

/*ligar o servidor*/
run_express.listen(porta,function (){
    console.log(`servidor em http://localhost:${porta}`)
})