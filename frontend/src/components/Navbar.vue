<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="@/assets/logo-blog.png" alt="logo"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Envie sua Receita</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Todas as Receitas</a>
            </li>
           
           
        </ul>
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="receita..." aria-label="Search">
            <button class="btn btn-warning" type="submit">Buscar</button>
        </form>
        </div>
    </div>
    </nav>

    <div class="navbar navbar-expand-lg bg-body-tertiary py-0">
    <div class="container-fluid" style="background: orange;">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-around align-items-center" id="navbarNavAltMarkup">
        <div class="navbar-nav">
            <a class="nav-link" aria-current="page" href="#">Categoria 1</a>
            <a class="nav-link" href="#">Categoria 2</a>
            <a class="nav-link" href="#">Categoria 3</a>
            <a class="nav-link" href="#">Categoria 4</a>
        </div>
        </div>
    </div>
    </div>
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
    * {
        font-family: 'Itim', cursive;
        font-size: 1.3rem;
    }
</style>