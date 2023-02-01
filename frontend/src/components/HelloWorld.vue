<template>
    <div>
        <span>{{ postagem }}</span>
    </div>
    <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from '@/utils/axios'
interface Postagem {
    id: string
    slug: string
    conteudo: string
    data: string
    categoria:string
    id_users: Number
}

export default defineComponent({
    props: {
        msg: String
    },
    data () {
        return {
            postagem: [] as Postagem[]
        }
    },methods: {
      async buscarPostagens(){
        const { data } = await axios.get('/postagens')  
        this.postagem = data
      },
})
</script>

<style scoped>

</style>