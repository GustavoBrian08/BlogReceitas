import express from 'express'
import cors from 'cors'
import {v4 as uuid } from 'uuid'

interface Usuario {
    id: string
    nome: string
    email: string
}

interface Postagem {
    id: string
    slug: string
    conteudo: string
    data: string
    categoria:string
    id_users: Number
}

let postagens:any[] = []

let usuarios: any[] = []

const app = express()

app.use(express.json())
app.use(cors({ origin: '*'}))

import {UsuarioDAO, PostagemDAO} from './databaseDAO'

app.get('/usuarios', async (request, response) => {
    // buscar todos os usuários no banco
    // select nome, email from usuarios;
    
    const usuarios = await UsuarioDAO.getLista();
    // retornar os usuários.
    return response.json(usuarios)
})

app.post('/usuarios', async (request, response) => {
    // pegar os dados do usuário
    const { nome, email } = request.body
    // salvar na base de dados
    try{
        await UsuarioDAO.createUsuario(nome, email)
        // criar um novo usuário
        const id = await UsuarioDAO.getIDUltimoUsuario()
        const usuario:any = {id, nome, email }
        usuarios.push(usuario)
        console.log(usuario)     
        // retornar o usuário recem criado
        return response.json(usuario)
    } catch(error){
        
    }

})

app.put('/usuarios/:id', async (request: any, response: any) => {
    // pegar os dados do usuário
    const { id } = request.params
    // Dados atualizados
    const { nome, email } = request.body
    // buscar o usuário no banco
     if(!(await UsuarioDAO.usuarioExiste(parseInt(id)))){
         // Se o usuário não existir
         return response.status(404).json({
             "Error": "Usuário não encontrado"
         })
     } else {
        // Atualizar o usuário no banco
        await UsuarioDAO.updateUsuario(parseInt(id), email );
        // updade usuar
        const indiceUsuario = usuarios.findIndex(
            (usuario) => usuario.id == id);
        const usuarioAtualizado: Usuario = { id, nome, email }
        usuarios[indiceUsuario] = usuarioAtualizado
    // Retorno o usuário com os dados atualizados
    return response.json(usuarioAtualizado)
     }
    })

app.delete('/usuarios/:id', async (request, response) => {
    // Receber o id do usuário
    const { id } = request.params
    
    if(!(await UsuarioDAO.usuarioExiste(parseInt(id)))){
        // Se o usuário não existir
        return response.status(404).json({
            "Error": "Usuário não encontrado"
        })
    } else {
        // Remover do banco
        await UsuarioDAO.deletarUsuario(parseInt(id));
        const indiceUsuario = usuarios.findIndex(
            (usuario) => usuario.id == id);
            usuarios.splice(indiceUsuario, 1)
            // Retorno uma msg confirmando a exclusão
            return response.status(204).send()
    }
})


app.get('/postagens', async (request, response) => {
    // buscar todos os usuários no banco
    // select nome, email from usuarios;
    
    const postagens = await PostagemDAO.getLista();
    // retornar os postagens.
    return response.json(postagens)
})

app.post('/postagens', async (request, response) => {
    // pegar os dados do usuário
    const { slug, titulo, conteudo,data, categoria, id_users } = request.body
    // salvar na base de dados
    try{
        await PostagemDAO.createPostagem(slug, titulo, conteudo,data, categoria, id_users)
        // criar um novo usuário
        const id = await PostagemDAO.getIDUltimoPostagem()
        const postagem:any = {id, slug, titulo, conteudo,data, categoria, id_users}
        postagens.push(postagem)
        console.log(postagem)     
        // retornar o usuário recem criado
        return response.json(postagem)
    } catch(error){
        
    }

})



app.listen('3333', () => {
    console.log("Servidor rodando....")
})