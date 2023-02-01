<template>
    <div>
        <span v-html="conteudo"></span>
        <form @submit="digitar" id="tinyForm">
            <textarea id="myTextarea" name="post">
                Seu conteúdo
            </textarea>
            <button type="submit" >Mostrar</button>
        </form>
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import App_frontVue from './App_front.vue';
export default defineComponent({
    data () {
        return {
            conteudo:`<p style='text-align: center;'><strong>Seu conteúdo</strong></p><p style='text-align: center;'> </p><p style='text-align: center;'><strong><img src='https://www.davidtech.com.br/wp-content/uploads/2020/04/Ton-T3-Pro-David-Tech.jpg' alt='' width='389' height='219'></strong></p><p style='text-align: center;'><strong>a maquina é uma maquina</strong></p>`
        }
    },
    components:{
        App_frontVue
    },
    methods: {
       digitar(e:any) {

        e.preventDefault();
        const myContent = tinymce.get("myTextarea").getContent()
        this.conteudo = myContent
        console.log(this.conteudo)
    }
    }
})
</script>

<style scoped>

</style>