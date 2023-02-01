<template>
    <div class="usuarios">
        <!-- <HelloWorld msg="Olá Mundo!" /> -->
        <div class="container">
          <section>
            <h5 class="titulo">Criar novo Usuário</h5>
            <form @submit.prevent="criarUsuario">
              <input type="text" placeholder="Nome" v-model="form.nome">
              <input type="text" placeholder="E-mail" v-model="form.email">
              <button type="submit">Adicionar</button>
            </form>
          </section>
          <section>
            <h5 class="titulo">Lista de Usuários</h5>
            <ul>
              <li v-for="u in usuarios" :key="u.id">
                <p> {{ u.nome }} </p>
                <small>{{ u.email }}</small>
                <a class="excluir" @click="excluirUsuario(u.id)"></a>
              </li>
            </ul>
          </section>
        </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import axios from '@/utils/axios'
  import HelloWorld from '@/components/HelloWorld.vue'
  import Toastify from 'toastify-js'
  import "toastify-js/src/toastify.css"
  
  
  interface Usuario {
    id: string
    nome: string
    email: string
  }
  
  export default defineComponent({
    components: {
      HelloWorld
    },
    data() {
      return {
        usuarios: [] as Usuario[],
        form: {
          nome: '',
          email: ''
        }
      }
    },
    created(){
      this.buscarUsuarios()
    },
    methods: {
      async buscarUsuarios(){
        const { data } = await axios.get('/usuarios')  
        this.usuarios = data
      },
      async criarUsuario(){
        try{
          const { data } =  await axios.post('/usuarios', this.form )
          this.usuarios.unshift(data)
          // Limpar o formulário
          this.form.nome = ''
          this.form.email = ''
          this.showToast("Usuário criado!")
        }catch(error){
          console.warn(error)
        }
      },
      async excluirUsuario(id: string){
        try{
          await axios.delete(`/usuarios/${id}`)
          const indiceUsuario = this.usuarios.findIndex((u) => u.id == id)
          this.showToast(`Usuário '${this.usuarios[indiceUsuario].nome}' excluído(a)!`)
          this.usuarios.splice(indiceUsuario, 1)
        }catch(error){
          console.warn(error)
        }
      },
      showToast(msg: string){
        Toastify({
          text: msg,
          duration: 3000
        }).showToast();
        }
    }
  })
  </script>
  
  <style scoped>
  
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }
  
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
  
  .container {  
    margin: 4rem auto;  
    max-width: 500px;  
    width: 90%;  
    display: grid;  
    grid-gap: 2.5rem;  
  }  
  .titulo {  
    font-size: 1rem;  
    font-weight: 500;  
    margin: 0.7rem 0;  
  }  
  form {  
    display: grid;  
    grid-gap: 1rem;  
  }  
  input {  
    background: transparent;  
    border: 1px solid #999fc6;  
    border-radius: 1rem;  
    padding: 0.6rem;  
    outline: none;  
    color: #e1e8ef;  
  }  
  input::placeholder {  
    color: #999fc6;  
  }  
  button {  
    background-color: #2d6cea;  
    color: #e1e8ef;  
    border: none;  
    border-radius: 1rem;  
    padding: 0.6rem 1.5rem;  
    width: max-content;  
    transition: all 0.3s linear;  
    outline: none;  
    cursor: pointer;  
    box-shadow: 0 0 5px 3px rgba(45, 108, 234, 0.3);  
  }  
  button:hover {  
    background-color: #1b5cdc;  
  }  
  p {  
    margin: 0;  
  }  
  ul {  
    padding: 0;  
    margin: 0;  
    display: grid;  
    grid-gap: 1rem;  
  }  
  li {  
    background-color: #2b3a4e;  
    padding: 1.2rem 1rem;  
    border-radius: 1rem;  
    position: relative;  
    list-style: none;  
    color: #8b98a8;  
  }  
  .excluir {  
    background-color: #d53e6b;  
    width: 24px;  
    height: 24px;  
    border-radius: 0.5rem;  
    cursor: pointer;  
    transition: all 0.2s linear;  
    position: absolute;  
    top: 50%;  
    transform: translateY(-50%);  
    right: 1.3rem;  
  }  
  .excluir:before,  
  .excluir:after {  
    content: '';  
    width: 3px;  
    height: 13px;  
    background-color: #ececf6;  
    border-radius: 1rem;  
    position: absolute;  
    top: 50%;  
    left: 50%;  
  }  
  .excluir:before {  
    transform: translate(-50%, -50%) rotate(45deg);  
  }  
  .excluir:after {  
    transform: translate(-50%, -50%) rotate(130deg);  
  }  
  .excluir:hover {  
    background-color: #984848;  
  }
  </style>