const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
require("../models/Usuario")
const Usuario = mongoose.model("usuarios")
const bcyrpt = require("bcryptjs")
const passport = require("passport")
const {eAdmin} = require('../helpers/eAdmin')

router.get("/registro", (req,res)=>{
    res.render("usuarios/registro")
})

router.post("/registro", (req,res)=>{
    var erros = []

    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
        erros.push({texto: "O campo de nome deve ser preenchido"})
    }

    if(!req.body.email || typeof req.body.email == undefined || req.body.email == null){
        erros.push({texto: "O campo de E-mail deve ser preenchido"})
    }

    if(!req.body.senha || typeof req.body.senha == undefined || req.body.senha == null){
        erros.push({texto: "O campo de senha deve ser preenchido"})
    }

    if(req.body.senha.length < 4 && req.body.senha.length > 0) {
        erros.push({texto: "Senha muito curta"})
    }

    if(req.body.senha != req.body.senha2){
        erros.push({texto: "As senhas são diferentes, tente novamente!"})
    }

    if(erros.length > 0){

        res.send({erros: erros})

    }else{
        Usuario.findOne({email: req.body.email}).then((usuario)=>{
            if (usuario){
                req.flash("error_msg", "Já existe uma conta com este e-mail no nosso sistema")
                res.send("Já existe uma conta com este e-mail no nosso sistema")
            }else{
                const novoUsuario = new Usuario({
                    nome: req.body.nome,
                    email: req.body.email,
                    senha: req.body.senha
                })

                bcyrpt.genSalt(10, (erro, salt)=>{
                    bcyrpt.hash(novoUsuario.senha, salt, (erro,hash)=>{
                        if (erro){
                            req.flash("error_msg", "Houve um erro durante o salvamento do usuário")
                            res.status(500).send("Houve um erro durante o salvamento do usuário")
                        }
                            novoUsuario.senha = hash

                            novoUsuario.save().then(()=>{
                                req.flash("success_msg", "Usuário Criado com sucesso!")
                                res.send("Usuario Cadastrado com sucesso!")
                            }).catch((err)=>{
                                req.flash("error_msg", "Houve um erro ao criar o usuário, tente novamente!")
                                res.status(500).send("Houve um erro ao criar o usuário, tente novamente!")
                            })
                        })
                })
            }
        }).catch((err)=>{
            req.flash("error_msg", "Houve um erro interno")
            res.redirect("/")
        })
    }
})

router.get("/login", (req,res)=>{
    res.render("usuarios/login")
})

router.post("/login",(req,res,next)=>{
    passport.authenticate("local",{
        successRedirect: res.send('sucesso ao fazer login'),
        failureRedirect: res.send('erro ao fazer login'),
        failureFlash: false
    })(req,res,next)
})

router.get("/logout",(req,res,next)=>{
    req.logout(function(err){
        if(err){
            res.send("Erro ao tentar deslogar")
            return next(err)
        }
    })
    req.flash("success_msg", "Deslogado com sucesso!")
    res.send("Deslogado com sucesso!")
})

module.exports = router