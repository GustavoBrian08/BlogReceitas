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

const usuarios: Usuario[] = []

const app = express()

app.use(express.json())
app.use(cors({ origin: '*'}))

app.get('/usuarios', (request, response) => {
   // buscar todos os usuários no banco
        // select nome, email from usuarios;
   // retornar os usuários.
   return response.json(usuarios)
})

app.post('/usuarios', (request, response) => {
    // pegar os dados do usuário
    const { nome, email } = request.body
    // criar um novo usuário
    const usuario = {id: uuid(), nome, email }
    // salvar na base de dados
        // insert into Usuarios values(, , ,)
    usuarios.push(usuario)     
    // retornar o usuário recem criado
    return response.json(usuario)
})

app.put('/usuarios/:id', (request, response) => {
    // pegar os dados do usuário
    const { id } = request.params
    // Dados atualizados
    const { nome, email } = request.body
    // buscar o usuário no banco
    const indiceUsuario = usuarios.findIndex(
        (usuario) => usuario.id == id)
        // Se o usuário não existir
        console.log(indiceUsuario)
        if(indiceUsuario < 0){
            // Retorno uma msg de erro
            return response.status(404).json({
                "Error": "Usuário não encontrado"
            })
        }
        // Atualizar o usuário no banco
        // updade usuar
        const usuarioAtualizado: Usuario = { id, nome, email }
        usuarios[indiceUsuario] = usuarioAtualizado
    // Retorno o usuário com os dados atualizados
    return response.json(
        usuarioAtualizado
    )
})

app.delete('/usuarios/:id', (request, response) => {
    // Receber o id do usuário
    const { id } = request.params
    const indiceUsuario = usuarios.findIndex(
        (usuario) => usuario.id == id)
        // Se o usuário não existir
        console.log(indiceUsuario)
        if(indiceUsuario < 0){
            // Retorno uma msg de erro
            return response.status(404).json({
                "Error": "Usuário não encontrado"
            })
        }
        // Remover o usuário do banco
          // delete from usuarios where id=?
          usuarios.splice(indiceUsuario, 1)
    // Retorno uma msg confirmando a exclusão
    return response.status(204).send()
})

app.listen('3333', () => {
    console.log("Servidor rodando....")
})