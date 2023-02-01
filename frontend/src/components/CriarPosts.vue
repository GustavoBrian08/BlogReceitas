<template>
    <div>
        <form @submit="enviar" class="d-flex flex-column align-items-center justify-content-center">
          <h3 class="align-self-start mt-3">Título da Postagem:</h3>
          <input class="form-control" type="text" placeholder="Insira um título..." aria-label="default input example" v-model="novo_post.titulo">
          <h3 class="align-self-start mt-3">Link da thumbnail:</h3>
          <input class="form-control" type="text" placeholder="Insira a url da thumbnail..." aria-label="default input example" v-model="novo_post.slug">
          <h3 class="align-self-start mt-3">Data:</h3>
          <input class="form-control" type="text" placeholder="Formato da data: aaammdd" aria-label="default input example" v-model="novo_post.data">
          <h3 class="align-self-start mt-3">Conteúdo da Postagem:</h3>
          <textarea id="tiny-area"></textarea>

            <button class="btn btn-success my-3" type="submit">Enviar</button>
        </form>
    </div>
</template>

<script lang="ts">
import axios from '@/utils/axios'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"


export default {
    name:'CriarPosts',
    data(){
        return {
            novo_post: {
                slug:'',
                titulo: '',
                conteudo: ``,
                data: '',
                categoria:'bolo',
                id_users:2
            },
        }    
    },
    components: {
        
    },
    methods: {
        enviar(e:any) {
            e.preventDefault();
            const myContent = tinymce.get("tiny-area").getContent()
            this.novo_post.conteudo = myContent
            this.criarPost()
            },
    async criarPost() {
      try {
        const { data } = await axios.post('/postagens', this.novo_post)
        // Limpar o formulário
        this.novo_post.conteudo = ''
        this.novo_post.slug = ''
        this.showToast("postagem criado!")
      } catch (error) {
        console.warn(error)
      }
    },
    showToast(msg: string) {
      Toastify({
        text: msg,
        duration: 3000
      }).showToast();
    }
    }
        
    
}
</script>
