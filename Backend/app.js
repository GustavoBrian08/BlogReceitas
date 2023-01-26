// Carregando Módulos
    const express = require('express')
    const handlebars = require('express-handlebars')
    const bodyParser = require('body-parser')
    const app = express()
    const admin = require('./routes/admin')
    const path = require('path')
    const mongoose = require('mongoose')
    const session = require('express-session')
    const flash = require('connect-flash')
    require("./models/Postagem")
    const Postagem = mongoose.model("postagens")
    require("./models/Categoria")
    const Categoria = mongoose.model("categorias")
    const usuarios = require("./routes/usuario")
    const passport = require("passport")
    require("./config/auth")(passport)
    

// Configurações
    // Sessão
        app.use(session({
            secret: "nivelsecretomaximo",
            resave: true,
            saveUninitialized: true
        }))

        app.use(passport.initialize())
        app.use(passport.session())
        app.use(flash())

    // Middleware
        app.use((req,res,next)=>{
            res.locals.success_msg = req.flash("success_msg")
            res.locals.error_msg = req.flash("error_msg")
            res.locals.error = req.flash("error")
            res.locals.user = req.user
            next()
        })
    // Body Parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
    // Handlebars
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars');
    // Mongoose
        mongoose.Promise = global.Promise;
        mongoose.connect('mongodb://localhost/blogapp').then(()=>{
            console.log('Conectado com sucesso!')
        }).catch((err)=>{
            console.log('Houve um erro ao se conectador: '+ err)
        })
    // Public
        app.use(express.static(path.join(__dirname, "public")))
// Rotas
    app.get('/',(req,res)=>{
        Postagem.find().lean().populate("categoria").sort({data: "desc"}).then((postagens)=>{
            res.send(postagens)
        }).catch((err)=>{
            req.flash("error_msg", "Houve um erro interno")
            res.status(500).send('Houve um erro interno');
        })
    })

    app.get('/postagem/:slug', (req,res)=>{
        Postagem.findOne({slug: req.params.slug}).lean().then((postagens)=>{
            if(postagens){
                res.send(postagens)
            }else{
                req.flash("error_msg", "Está Postagem não existe")
                res.status(404).send('Erro 404!');
            }
        }).catch((err)=>{
            req.flash("error_msg", "Houve um erro interno")
            res.status(500).send('Houve um erro interno ao carregar a página desta categoria');
        })
    })

    app.get("/categorias", (req,res)=>{
        Categoria.find().lean().then((categorias)=>{
            res.send(categorias)
        }).catch((err)=>{
            req.flash("error_msg", "Houve um error ao listar as categorias")
            res.status(500).send('Houve um erro interno ao carregar a página desta categoria');
        })
    })

    app.get("/categorias/:slug",(req,res)=>{
        Categoria.findOne({slug: req.params.slug}).lean().then((categoria)=>{
            if(categoria){
                Postagem.find({categoria: categoria._id}).lean().then((postagens)=>{
                    res.send({postagens: postagens, categoria: categoria})
                }).catch((err)=>{
                    req.flash("error_msg", "Houve um erro ao listar os posts!")
                    res.status(404).send('Erro 404!');
                })
            }else{
                req.flash("error_msg", "Esta categoria não existe")
                res.status(404).send('Erro 404!');
            }
        }).catch((err)=>{
            console.log(err)
            req.flash("error_msg", "Houve um erro interno ao carregar a página desta categoria")
                res.status(500).send('Houve um erro interno ao carregar a página desta categoria');
        })
    })

    app.get("/404", (req,res)=>{
        res.send("Erro 404!")
    })


    app.use('/admin', admin)
    app.use('/usuarios', usuarios)
// Outros
    const PORT = 8081
    app.listen(PORT,()=>{
        console.log('Servidor iniciado com sucesso!')
    })