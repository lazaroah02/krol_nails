<template>
    <div id = "footer">
        <div id = "logo-container">
            <img alt = "logo" :src = "KrolNailsLogo"/>
        </div>
        <div id = "created-by-container">
            <p>Designed by <a href = "https://www.instagram.com/keyli_designer/" target = "_blank"><img alt = "instagram-logo" :src = "InstagramLogo"/>Keyli_Designer</a></p>
            <p>Developed by <a href = "https://lazaro-altedill-portfolio.onrender.com/" target = "_blank"><img alt = "web-icon" :src = "WebIcon"/>Lazaro Altedill</a></p>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import InstagramLogo from '../assets/instagram-icon.svg'
import WebIcon from '../assets/web-icon.svg'
import KrolNailsLogo from '../assets/krol-nails-logo-transparent-bg.png'

export default defineComponent({
    setup() {
        
    },
    data(){
        return{
            InstagramLogo,
            WebIcon,
            KrolNailsLogo,
        }
    }
})
</script>

<style scoped>
    @font-face {
        font-family: 'Cabin';
        src: url('../assets/fonts/Glory-VariableFont_wght.woff2') format("woff2");
    }
    #footer{
        height: 70px;
        width: 99%;
        background-color: #B65963;
        color:#fff;
        padding:5px;
        font-family: 'Cabin';
        z-index: 200;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    #created-by-container{
        font-size: 12px;
        float: right;
        margin-right: 20px;
    }
    #created-by-container p{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    #created-by-container a{
        margin-left:5px;
        color:#fff;
        text-decoration: none;
        display:flex;
        align-items: center;
    }
    #created-by-container a:hover{
        text-decoration: underline;
    }
    #created-by-container img{
        width: 14px;
        height: 14px;
    }
    #logo-container{
        width: 70px;
        height: 70px;
    }
    #logo-container img{
        width: 100%;
        height: 100%;
    }
</style>
