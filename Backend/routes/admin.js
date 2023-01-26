const { text } = require('body-parser')
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/Categoria')
const Categoria = mongoose.model('categorias')
require('../models/Postagem')
const Postagem = mongoose.model('postagens')
const {eAdmin} = require("../helpers/eAdmin")



router.get('/', eAdmin, (req,res)=>{
    res.render('admin/index')
});

router.get('/posts', eAdmin,(req,res)=>{
    res.send('Página de Posts')
});

router.get('/categorias', eAdmin,(req,res)=>{
    

    Categoria.find().lean().then((categorias) => {
        res.send(categorias)
    }).catch((err)=>{
        req.flash("error_msg", "houve um erro ao listar as categorias")
        res.status(500).send("houve um erro ao listar as categorias")
    })
})

router.get('/categorias/add', eAdmin, (req,res)=>{
    res.render('admin/addcategorias')
})

router.post('/categorias/nova', eAdmin, (req,res)=>{
    
    var erros = []
    

    if (!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
        erros.push({texto: "Nome inválido!"})
    }

    if (!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null){
        erros.push({texto: "Slug inválido!"})
    }

    if (req.body.nome.length < 2){
        erros.push({texto: "Nome da categoria é muito pequeno!"})
    }

    if (erros.length > 0){
        res.send({erros: erros})
    }else{
        const novaCategoria = {
            nome: req.body.nome,
            slug: req.body.slug
        }
    
        new Categoria(novaCategoria).save().then(()=>{
            req.flash("success_msg", "Categoria criada com sucesso!")
            res.send("Categoria criada com sucesso!")
        }).catch((err)=>{
            req.flash("error_msg", "Houve um erro ao salver a categoria, tente novamente!")
            res.status(500).send("Houve um erro ao salver a categoria, tente novamente!")
        })
    }
})

router.get('/categorias/edit/:id', eAdmin, (req,res)=>{
    Categoria.findOne({_id:req.params.id}).lean().then((categorias)=>{
        res.send(categorias)
    }).catch((err)=>{
        req.flash("error_msg", "Está categoria não existe!")
        res.send("Está categoria não existe!")
    })
})

router.post("/categorias/edit", eAdmin, (req,res)=>{
    Categoria.findOne({_id: req.body.id}).then((categorias)=>{
        var erros = []

        if (!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
            erros.push({texto: "Nome invalido!"})
        }
        if (!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null){
            erros.push({texto: "Slug invalido!"})
        }

        if (req.body.nome.length <= 2){
            erros.push({texto: "Nome da categoria é muito pequeno!"})
        }
        if (erros.length > 0){
            Categoria.findOne({ _id: req.body.id }).lean().then((categorias) => {
                res.send({erros: erros,categorias: categorias})
            }).catch((err) => {
                req.flash("error_msg", "Erro ao pegar os dados")
                res.send("Erro ao pegar os dados")
            }) 
        }else{
            categorias.nome = req.body.nome
            categorias.slug = req.body.slug
            categorias.save().then(()=>{
                req.flash("success_msg", "Categoria editada com sucesso!")
                res.send("Categoria editada com sucesso!")
    
            }).catch((err)=>{
                req.flash("error_msg", "Houve um erro interno ao salvar a edição da categoria")
            res.status(500).send("Houve um erro interno ao salvar a edição da categoria")
            })
        }
    }).catch((err)=>{
        console.log(err)
        req.flash("error_msg", "Houve um erro ao editar a categoria!")
            res.send("Houve um erro ao editar a categoria!")
    })


})

router.post('/categorias/deletar', eAdmin, (req,res)=>{
    Categoria.remove({_id: req.body.id}).then(()=>{
        req.flash("success_msg", "Categoria deletada com sucesso!")
        res.send("Categoria deletada com sucesso!")
    }).catch((err)=>{
        req.flash("error_msg", "Houve um erro ao deletar a categoria!")
        res.send("Houve um erro ao deletar a categoria!")
    })
})

router.get('/postagens', eAdmin,(req,res)=>{
    Postagem.find().lean().populate("categoria").sort({data:"desc"}).then((postagens)=>{
        res.send(postagens)
    }).catch((err)=>{
        req.flash("error_msg", "Houve um erro ao listar as postagens")
        res.status(500).status("Houve um erro ao listar as postagens")
    })
})

router.get('/postagens/add', eAdmin,(req,res)=>{
    Categoria.find().lean().then((categorias)=>{
        res.send(categorias)
    }).catch((err)=>{
        res.flash("error_msg","Houve um error ao carregar formulário")
        res.status(500).send("Houve um error ao carregar formulário")
    })
})

router.post('/postagens/nova', eAdmin,(req,res)=>{
    var erros = []

    if (!req.body.titulo || typeof req.body.titulo == undefined || req.body.titulo == null){
        erros.push({texto: "Campo de Titulo está vazio"})
    }
    if (req.body.titulo.length <=2 && req.body.titulo.length > 0){
        erros.push({texto: "Titulo Muito pequeno"})
    }
    if (!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null){
        erros.push({texto: "Campo de Slug está vazio"})
    }
    if (!req.body.descricao || typeof req.body.descricao == undefined || req.body.descricao == null){
        erros.push({texto: "Campo de Descrição está vazio"})
    }
    if (!req.body.conteudo|| req.body.conteudo == null){
        erros.push({texto: "Campo de Conteudo está vazio"})
    }
    if (req.body.conteudo.length < 10 && req.body.conteudo.length > 0){
        erros.push({texto: "Conteudo deve ter pelo menos 10 caracteres"})
    }
    if (req.body.categoria == 0){
        erros.push({texto: "Categoria inválida, regristre uma categoria"})
    }
    if (erros.length > 0){
        Categoria.find().lean().then((categorias)=>{
            res.send({erros: erros,categorias: categorias})
        }).catch((err)=>{
            res.flash("error_msg","Houve um error ao carregar formulário")
            res.status(500).send("Houve um error ao carregar formulário")
        })
    }else{
        const novaPostagem = {
            titulo: req.body.titulo,
            slug: req.body.slug,
            descricao: req.body.descricao,
            conteudo: req.body.conteudo,
            categoria: req.body.categoria
        }
        new Postagem(novaPostagem).save().then(()=>{
            req.flash("success_msg", "Postagem criada com sucesso!")
            res.send("Postagem criada com sucesso!")
        }).catch((err)=>{
            req.flash("error_msg", "Houve um erro durante o salvamento da postagem")
            res.status(500).send("Houve um erro durante o salvamento da postagem")
        })
    }
})

router.get("/postagens/edit/:id", eAdmin,(req,res)=>{
    Postagem.findOne({_id: req.params.id}).lean().then((postagens)=>{
        Categoria.find().lean().then((categorias)=>{
            res.send({categorias: categorias, postagens: postagens})
        }).catch((err)=>{
            req.flash("error_msg", "Houve um erro ao listar as categorias")
            rres.status(500).send("Houve um erro ao listar as categorias")
        })
    }).catch((err)=>{
        req.flash("error_msg", "Houve um erro ao carregar o formulário de edição de postagens"+err)
        res.status(500).send("Houve um erro ao carregar o formulário de edição de postagens"+err)
    })
})

router.post("/postagens/edit", eAdmin,(req,res)=>{
    Postagem.findOne({_id: req.body.id}).then((postagens)=>{

        postagens.titulo = req.body.titulo
        postagens.slug = req.body.slug
        postagens.descricao = req.body.descricao
        postagens.conteudo = req.body.conteudo
        postagens.categoria = req.body.categoria

        postagens.save().then(()=>{
            req.flash("success_msg", "Postagem editada com sucesso")
            res.send("Postagem editada com sucesso")
        }).catch((err)=>{
            req.flash("error_msg", "Erro interno")
            res.status(500).send("Houve um erro interno")
        })
    }).catch((err)=>{
        console.log(err)
        req.flash("error_msg", "Houve um erro ao salvar a edição")
        res.status(500).send("Houve um erro ao salvar a edição")
    })
})

router.get("/postagens/deletar/:id", eAdmin,(req,res)=>{
    Postagem.remove({_id: req.params.id}).then(()=>{
        req.flash("success_msg", "Postagem deletada com sucesso!")
        res.send("Postagem deletada com sucesso!")
    }).catch((err)=>{
        req.flash("error_msg", "Houve um erro interno")
        res.status(500).send("Houve um erro interno")
    })
})

module.exports = router