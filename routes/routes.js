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
        res.render("404.ejs")
    })

}