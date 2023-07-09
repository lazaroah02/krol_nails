<template>
  <div id="nav-bar">
    <div id="top-nav-bar">
      <div id = "logo-container">
        <img alt = "logo" :src = "KrolNailsLogo"/>
      </div>
      <div>
        Karol Nails
      </div>
    </div>
    <div id="bottom-nav-bar">
      <div
        :class="
          route.fullPath == '/mis-trabajos'
            ? 'link-nav-bar link-active'
            : 'link-nav-bar'
        "
        @click="router.push('/mis-trabajos')"
      >
        Mis trabajos
      </div>
      <div
        :class="
          route.fullPath == '/ofertas'
            ? 'link-nav-bar link-active'
            : 'link-nav-bar'
        "
        @click="router.push('/ofertas')"
      >
        Ofertas
      </div>
      <div
        :class="
          route.fullPath == '/contacto'
            ? 'link-nav-bar link-active'
            : 'link-nav-bar'
        "
        @click="router.push('/contacto')"
      >
        Mi direccion
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
import KrolNailsLogo from '../assets/krol-nails-logo-transparent-bg.png'

export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();
    return { route, router };
  },
  data(){
    return{
      KrolNailsLogo,
    }
  }
});
</script>

<style scoped>
@font-face {
  font-family: "Josefin";
  src: url("../assets/fonts/JosefinSans-VariableFont_wght.woff2")
    format("woff2");
}
#nav-bar {
  background-color: #dc7782;
  display: flex;
  flex-direction: column;
}
#top-nav-bar {
  width: 100%;
  height: 30px;
  text-align: center;
  padding: 10px;
  font-family: "Josefin";
  font-size: 20px;
  color: white;
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
#logo-container{
  width: 70px;
  height: 70px;
  position:absolute;
  left:0;
}
#logo-container img{
  width: 100%;
  height: 100%;
}
#bottom-nav-bar {
  background-color: #e3929b;
  height: 30px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.link-nav-bar {
  width: 33%;
  text-align: center;
  color: white;
  font-family: "Josefin";
  font-size: 15px;
  padding: 5px;
  cursor: pointer;
}
.link-nav-bar:hover {
  text-decoration-line: underline;
}
.link-active {
  text-decoration-line: underline;
}
</style>
