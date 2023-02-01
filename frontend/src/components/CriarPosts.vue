<template>
    <div>
        <form @submit="enviar" class="d-flex flex-column align-items-center justify-content-center">
            <textarea id="tiny-area"></textarea>
            <input type="text" value="slug">
            <input type="text" value="20230201">

            <button class="btn btn-success my-3">Enviar</button>
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
                slug:'slug',
                conteudo: ``,
                data: '20230201',
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
