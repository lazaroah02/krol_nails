<template>
  <div id="nav-bar">
    <div id="top-nav-bar">Karol Nails</div>
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

export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();
    return { route, router };
  },
});
</script>

<style scoped>
@font-face {
  font-family: "Josefin";
  src: url("../assets/fonts/JosefinSans-VariableFont_wght.woff2")
    format("woff2");
}
#nav-bar {
  width: 100vw;
  height: 60px;
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
}
#bottom-nav-bar {
  background-color: #e3929b;
  height: 30px;
  display: flex;
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
