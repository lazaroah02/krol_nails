<template>
    <main id = "home-container">
        <h1 id = "title">
            Karol Nails
        </h1>
        <div id = "home-page-message">
            Hola soy Karol, aqui te muestro mis ofertas y trabajos realizados, espero que me visites
        </div>
        <div id = "button-go-catalog-container">
            <button id = "go-catalog-button" @click="router.push('/mis-trabajos')">
                Ver catálogo
            </button>
        </div>
    </main>
</template>

<script>
import { defineComponent } from 'vue'
import {useRouter} from 'vue-router'

export default defineComponent({
    setup() {
        const router = useRouter()
        return {router}
    },
})
</script>

<style scoped>
    @font-face {
        font-family: 'Josefin';
        src: url('../assets/fonts/JosefinSans-VariableFont_wght.woff2') format("woff2");
    }
    #home-container{
        background-image: url('../assets/home_bg.png');
        background-size: cover;
        background-repeat: no-repeat ;
        background-attachment: scroll;
        background-color: #BE6972;
        min-width: 100vw;
        min-height: 100vh;
        position:absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    #title{
        width:100%;
        text-align: center;
        color:#BE6972;
        font-family: 'Josefin';
    }
    #home-page-message{
        text-align: center;
        width:50%;
        margin:0 auto;
        color:#BE6972;
        font-family: 'Josefin';
        font-size:20px;
    }
    #button-go-catalog-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 80px;
    }
    #go-catalog-button{
        color:white;
        background-color: #DC7782;
        border-radius:10px;
        height:35px;
        width: 230px;
        border:0;
        cursor:pointer;
        font-family: 'Josefin', 'cabin';
    }

    @media (max-width:500px) {
        #home-page-message{
            width: 90%;
        }
    }
</style>
