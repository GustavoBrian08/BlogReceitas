<template>
    <div>
        <h1>{{ msg }}</h1>
        <hr>
        <p>stasljtalstjasljals</p>
    </div>
    <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        msg: String
    },
    data () {
        return {
        }
    }
})
</script>

<style scoped>

</style>