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

/*criar uma rota para a requisição / */
module.exports = function(app){

    /* Home Routes */

    app.get("/",function(req,res){
        res.render("blog.ejs")
    })

    app.get("/blog",function(req,res){
        res.render("blog.ejs")
    })

    app.get("/index.ejs",function(req,res){
        res.render("blog.ejs")
    })

    app.get("/index.html",function(req,res){
        res.render("blog.ejs")
    })

    app.get("/home",function(req,res){
        res.render("blog.ejs")
    })

    /* Artigo 1 */

    app.get("/blog/ac1",function(req,res){
        res.render("Ac1.ejs")
    })    

    app.get("/ac1",function(req,res){
        res.render("Ac1.ejs")
    })

    /* Não Encontrado */

    app.get("/*",function(req,res){
        res.render("404.ejs",{url: req.url})
        
    })

}