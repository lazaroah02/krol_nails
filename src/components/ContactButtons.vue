<template>
    <div id = "buttons-contact-container" class = "buttons-container-width">
        <button id = "instagram-button">
            <div class = "image-contact-container">
                <img alt = "instagram" :src = "InstagramIcon"/>
            </div>
            <div>
                <a href = "https://www.instagram.com/kro_nail/" target = "_blank">@Kro_Nail</a>
            </div>
        </button>
      <button id = "wattsap-button">
        <div class = "image-contact-container">
            <img alt = "wattsap" :src = "WattsapIcon"/>
        </div>
        <div>
            <a href = "https://wa.me/5355323830" target = "_blank">+53 55323830</a> 
        </div>
      </button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import InstagramIcon from '../assets/instagram-icon.svg'
import WattsapIcon from '../assets/wattsap-icon.svg'

export default defineComponent({
    data(){
        return{
            InstagramIcon,
            WattsapIcon,
        }
  }
})
</script>

<style scoped>
    #buttons-contact-container{
        position: fixed;
        top:90vh;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        z-index: 100;
    }
    #buttons-contact-container button{
        background-color: #E69FA7;
        border:0;
        border-radius: 50px;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap:5px;
        opacity: 0.85;
        color:#fff;
        cursor:pointer;
        height: 35px;
    }
    #buttons-contact-container a{
        color:#fff;
        text-decoration: none;
    }
    .image-contact-container{
        background-color:#DC7782;
        width: 40px;
        height: 30px;
        padding-top:5px;
        margin-left:-6px;
        border-radius: 50px;
    }
    #wattsap-button{
        margin-right: 20px;
    }

    @media (max-width:500px){
        #buttons-contact-container{
            top:85vh;
        }
    }
</style>
