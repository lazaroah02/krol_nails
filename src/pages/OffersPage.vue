<template>
    <NavBar/>
    <main id = "offers-page-container">
        <div id = "offers-container">
            <section id = "hands-nails">
                <header id = "offers-title">
                    <div id = "offers-title-line"></div>
                    <h4 id = "offers-title-text">Uñas de las Manos</h4>
                </header>
                <article class = "card" id = "offer-card-new-apps">
                    <div class = "card-title"><strong>Nuevas aplicaciones</strong></div>
                    <div class = "card-sub-title">
                        <p>Largo de las uñas</p>
                        <p>Precios</p>
                    </div>
                    <div class = "card-content">
                        <div class = "content-line" v-for="(price, index) in nailsNewAppsPrices" :key = "index">
                            <p class = "offer"># {{ index + 1 }}</p>
                            <div class = "separator"></div>
                            <p class = "price">{{ price }} cup</p>
                        </div>
                        <div>Se incluye esmaltado en gel en el precio</div>
                    </div>
                </article>
                <article class = "card" id = "offer-card-efects">
                    <div class = "card-title"><strong>Efectos</strong></div>
                    <div class = "card-sub-title">
                        <p>Efectos</p>
                        <p>Precios</p>
                    </div>
                    <div class = "card-content">
                        <div class = "content-line" >
                            <p class = "offer">Baby boomer</p>
                            <div class = "separator"></div>
                            <p class = "price">100 cup</p>
                        </div>
                        <div class = "content-line" >
                            <p class = "offer">Encapsulado</p>
                            <div class = "separator"></div>
                            <p class = "price">100 cup</p>
                        </div>
                        <div class = "content-line" >
                            <p class = "offer">Otros efectos</p>
                            <div class = "separator"></div>
                            <p class = "price">100-120 cup</p>
                        </div>
                    </div>
                </article>
                <article class = "card" id = "offer-card-others">
                    <div class = "card-title"><strong>Otras decoraciones</strong></div>
                    <div class = "card-sub-title">
                        <p>Decoraciones</p>
                        <p>Precios</p>
                    </div>
                    <div class = "content-line" >
                        <p class = "offer">2 Stikers</p>
                        <div class = "separator"></div>
                        <p class = "price">30 cup</p>
                    </div>
                    <div class = "content-line" >
                        <p class = "offer">Piedritas</p>
                        <div class = "separator"></div>
                        <p class = "price">30-50 cup</p>
                    </div>
                    <div class = "content-line" >
                        <p class = "offer">Balines</p>
                        <div class = "separator"></div>
                        <p class = "price">30-50 cup</p>
                    </div>
                    <div class = "content-line" >
                        <p class = "offer">Otras</p>
                        <div class = "separator"></div>
                        <p class = "price">50-100 cup</p>
                    </div>
                </article>
                <article class = "card" id = "offer-card-mantaining">
                    <div class = "card-title"><strong>Mantenimiento</strong></div>
                    <div class = "card-sub-title">
                        <p>Mantenimientos</p>
                        <p>Precios</p>
                    </div>
                    <div class = "content-line" >
                        <p class = "offer">Relleno</p>
                        <div class = "separator"></div>
                        <p class = "price">400 cup</p>
                    </div>
                    <div class = "content-line" >
                        <p class = "offer">Relleno cover</p>
                        <div class = "separator"></div>
                        <p class = "price">500 cup</p>
                    </div>
                    <div class = "content-line" >
                        <p class = "offer">Esmaltado en gel de uñas naturales</p>
                        <div class = "separator"></div>
                        <p class = "price">150 cup</p>
                    </div>
                    <div class = "content-line" >
                        <p class = "offer">Reponer una uña</p>
                        <div class = "separator"></div>
                        <p class = "price">50-100 cup</p>
                    </div>
                    <div class = "content-line" >
                        <p class = "offer">Retirar</p>
                        <div class = "separator"></div>
                        <p class = "price">100 cup</p>
                    </div>
                </article>
            </section>
            <section id = "feet-nails">
                <header id = "offers-title">
                    <div id = "offers-title-line"></div>
                    <h4 id = "offers-title-text">Uñas de los Pies</h4>
                </header>
                <article class = "card" id = "offer-card-new-apps">
                    <div class = "card-title"><strong>Uñas de los Pies</strong></div>
                    <div class = "card-sub-title">
                        <p>Ofertas</p>
                        <p>Precios</p>
                    </div>
                    <div class = "content-line" >
                        <p class = "offer">Aplicación</p>
                        <div class = "separator"></div>
                        <p class = "price">200 cup</p>
                    </div>
                    <div class = "content-line" >
                        <p class = "offer">Relleno</p>
                        <div class = "separator"></div>
                        <p class = "price">100 cup</p>
                    </div>
                </article>
            </section>
        </div>
        <FooterComponent/>
        <ContactButtons/>
    </main>
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
    data(){
        return{
            nailsNewAppsPrices:["500", "600", "700", "800", "900", "1000", "1100", "1200"],
        }
    }
})
</script>


<style scoped>
    @font-face {
        font-family: 'Cabin';
        src: url('../assets/fonts/Cabin-VariableFont.woff2') format("woff2");
    }
    #offers-page-container{
        width: 100vw;
        min-height: 100vh;
        background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('../assets/home_bg.png');
        background-size: cover;
        background-repeat: no-repeat ;
        background-attachment: fixed;
        background-color: #fff;
        position:absolute;
        margin-top:5px;
    }
    #offers-container{
        width: 80%;
        margin:0 auto;
        display:flex;
        flex-direction:row;
        justify-content:center;
        gap:20px;
        margin-top:10px;
        padding-bottom: 130px;
        font-family: 'Cabin';
    }
    /*background-color: #FBF0ED;*/
    #hands-nails{
        width: 50%;
        text-align: center;
    }
    #feet-nails{
        width: 50%;
        text-align: center;
    }
    /*sections title*/
    #offers-title-line{
        height:1px;
        background-color:#BE6972;
        margin-top:10px;
    }
    #offers-title-text{
        background-color:#fff;
        color:#BE6972;
        width: 150px;
        margin:0 auto;
        position: relative;
        bottom: 10px;
    }
    /*Cards*/
    .card{
        background-color:#FBF0ED;
        margin-top:15px;
        border-radius:10px;
        box-shadow: 1px 1px 2px rgba(169, 167, 167, 0.69);
        color:#BE6972;
        padding:3px
    }
    .card-title{
        font-size: 18px;
        text-align: center;
        padding-top:10px
    }
    .card-sub-title{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        padding-left: 5%;
        padding-right: 5%;
    }
    /*content line*/
    .content-line{
        display:flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
        align-items: center;
        gap:5px;
        text-align: center;
    }
    .offer{
        width: 25%;
    }
    .price{
        width: 20%;
    }
    .separator{
        height:3px;
        width: 50%;
        border-bottom: 2px dotted #BE6972;
    }
    #offer-card-new-apps{

    }
    .buttons-container-width{
        width: 100%;
        justify-content: center!important;
        gap:20px;
    }

    /*Tablet and Mobile*/
    @media (max-width:800px){
        #offers-container{
            flex-direction: column;
            width: 90%;
        }
        #hands-nails{
            width: 100%;

        }
        #feet-nails{
            width: 100%;
        }
    }
</style>