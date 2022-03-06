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