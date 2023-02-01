<template>
  <div class="usuarios">
    <Navbar />

    <Carrossel />
    <div class="container d-flex flex-column justify-content-center align-items-center">
      <h1 class="titulo my-4">Envie sua Receita</h1>
      <CriarPosts />
      <section>
        <h5 class="titulo my-5 ">Todas as Receitas</h5>

        <div class="card" v-for="p in postagem" :key="p.id" style="width: 18rem;">
          <img :src="p.slug" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">p.</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <div @click="">
          <div v-for="p in postagem" :key="p.id">
            <p v-html="p.slug"></p>
            <span v-html="p.conteudo"></span>
            <a class="excluir" @click="excluirUsuario(p.id)"></a>
          </div>
        </div>
      </section>
    </div>
    <Rodape />
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue'
import Carrossel from './components/Carrossel.vue'
import Rodape from './components/Rodape.vue'
import { defineComponent } from 'vue'
import axios from '@/utils/axios'
import HelloWorld from '@/components/Navbar.vue'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import CriarPosts from '@/components/CriarPosts.vue'


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
  categoria: string
  id_users: Number
}

export default defineComponent({
  components: {
    Navbar,
    Carrossel,
    Rodape,
    HelloWorld,
    CriarPosts
  },
  data() {
    return {
      usuarios: [] as Usuario[],
      postagem: [] as Postagem[],
      form: {
        nome: '',
        email: ''
      }
    }
  },
  created() {
    // this.buscarUsuarios()
    this.buscarPostagens()
  },
  methods: {
    async buscarUsuarios() {
      const { data } = await axios.get('/usuarios')
      this.usuarios = data
    }, async buscarPostagens() {
      const { data } = await axios.get('/postagens')
      this.postagem = data
    },
    async criarUsuario() {
      try {
        const { data } = await axios.post('/usuarios', this.form)
        this.usuarios.unshift(data)
        // Limpar o formulário
        this.form.nome = ''
        this.form.email = ''
        this.showToast("Usuário criado!")
      } catch (error) {
        console.warn(error)
      }
    },
    async excluirUsuario(id: string) {
      try {
        await axios.delete(`/usuarios/${id}`)
        const indiceUsuario = this.usuarios.findIndex((u) => u.id == id)
        this.showToast(`Usuário '${this.usuarios[indiceUsuario].nome}' excluído(a)!`)
        this.usuarios.splice(indiceUsuario, 1)
      } catch (error) {
        console.warn(error)
      }
    },
    showToast(msg: string) {
      Toastify({
        text: msg,
        duration: 3000
      }).showToast();
    },

  }
})
</script>

<style>
* {
  font-family: 'Itim', cursive;
}

.titulo {
  font-size: 4rem;
}

body::-webkit-scrollbar {
  width: 8px !important;
  background-color: #2B3035 !important;
}

body::-webkit-scrollbar-thumb {
  background-color: orange !important;
  border-radius: 30px;
}


/* .v-enter-active,
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
} */
</style>