<template>
    <NavBar/>
    <main id = "contact-page-container">
        <section id = "contact-content">
            <div id = "map-container">
                <iframe id = "map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1864.0139254826913!2d-76.27244799646958!3d20.870927648214042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ecdf36271bd120b%3A0x461bbc4b98af0198!2sKrol%20Nails!5e0!3m2!1sen!2scu!4v1688938592365!5m2!1sen!2scu" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div id = "description">
                <p class = "promotion-message">
                    Agenda tu cita, somos un personal cualificado para realizar el trabajo que usted desee, si puedes imaginarlo, podemos crearlo :)
                </p>
                <p class = "promotion-message">
                    Direccion: Reparto Emilio Barcena, calle 9na final/Calle Fajardo y 2da.
                </p>
            </div>
        </section>
    </main>
    <ContactButtons/>
    <FooterComponent/>
</template>

<script>
import { defineComponent } from 'vue'
import NavBar from '../components/NavBar.vue'
import ContactButtons from '../components/ContactButtons.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default defineComponent({
    components:{
        NavBar,
        ContactButtons,
        FooterComponent,
    },
    setup() {
        
    },
})
</script>


<style scoped>
    @font-face {
        font-family: 'Cabin';
        src: url('../assets/fonts/Cabin-VariableFont.woff2') format("woff2");
    }
    #contact-page-container{
        background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('../assets/home_bg.png');
        background-size: cover;
        background-repeat: no-repeat ;
        background-attachment: fixed;
        background-color: #fff;
    }
    #contact-content{
        width: 100%;
        display: flex;
        flex-direction: row;
    }
    .buttons-container-width{
        width: 50%;
        justify-content: center!important;
        gap:20px;
        right: -30px;
        top:80vh!important;
    }
    #map-container{
        padding:10px;
        width: 50%;
        height: 74vh;
    }
    #map{
        width: 100%;
        height: 100%;
    }
    #description{
        width: 50%;
        font-family: 'Cabin';
    }
    .promotion-message{
        border-left: 3px solid #DC7782;
        padding-left:10px;
    }
    @media (max-width:800px){
        #contact-content{
            flex-direction: column;
            min-height: 100vh;
        }
        #map-container{
            width: 90%;
            height: 50vh;
            margin:0 auto;
        }
        .buttons-container-width{
            width: 100%;
            justify-content: center!important;
            gap:20px;
            margin-right: 25px;
            top:85vh!important;
        }
        #description{
            width: 90%;
            margin: 0 auto;
        }
    }
</style>