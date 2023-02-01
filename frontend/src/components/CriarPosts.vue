<template>
    <div>
        <form class="d-flex flex-column align-items-center justify-content-center">
            <textarea id="tiny-area" :value="novo_post"></textarea>
            <button class="btn btn-success my-3">Enviar</button>
        </form>
    </div>
</template>

<script lang="ts">

export default {
    name:'CriarPosts',
    data(){
        return {
            novo_post: ''
        }    
    },
    components: {
        
    }
        
    
}
</script>
