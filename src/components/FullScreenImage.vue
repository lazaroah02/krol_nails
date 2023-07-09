<template>
  <div
    v-if="image.id !== null"
    id="full-screen-image-container"
    :class="!showFullScreenImage ? 'element-hidden' : null"
  >
    <button id="close-button" @click="setShowFullScreenImage(false)">
      <img :src="CloseIcon" alt="close" />
    </button>
    <button id="left-button" @click="setSelectedImageById(image.id - 1)">
      <img :src="LeftArrow" alt="Left Arrow" />
    </button>
    <img alt="jobs" :src="image.url" />
    <button id="right-button" @click="setSelectedImageById(image.id + 1)">
      <img :src="RightArrow" al="Right Arrow" />
    </button>
  </div>
  <div v-else id="full-screen-image-container">
    <div id="no-images-message">Selecciona una imagen para visualizar</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import LeftArrow from "../assets/left-arrow.svg";
import RightArrow from "../assets/right-arrow.svg";
import CloseIcon from "../assets/close-x.svg";

export default defineComponent({
  props: {
    image: Object,
    setSelectedImageById: Function,
    showFullScreenImage: Boolean,
    setShowFullScreenImage: Function,
  },
  data() {
    return {
      LeftArrow,
      RightArrow,
      CloseIcon,
    };
  },
});
</script>

<style scoped>
#full-screen-image-container {
  width: 50%;
  max-height: 90vh;
}
#no-images-message {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#full-screen-image-container img {
  width: 100%;
  height: 100%;
}
#left-button {
  position: absolute;
  top: 50%;
  float: left;
  border-radius: 100%;
  width: 48px;
  height: 48px;
  background: transparent;
  border: 0;
  margin-left: 5px;
  cursor: pointer;
}
#right-button {
  position: absolute;
  top: 50%;
  right: 5px;
  float: right;
  border-radius: 100%;
  width: 48px;
  height: 48px;
  background: transparent;
  border: 0;
  margin-right: 5px;
  cursor: pointer;
}
#close-button {
  display:none;
  width: 48px;
  height: 48px;
}
.element-hidden {
  display: none !important;
}

/*tablet*/
@media (min-width: 500px) and (max-width: 900px) {
  #full-screen-image-container {
    width: 90vw;
    height: 85vh;
    margin:0 auto;
    position: absolute;
    top: 80px;
    left: 50%;
    margin-left: -45vw; /* La mitad de la anchura */
    border-radius: 10px;
  }
  #full-screen-image-container img{
    border-radius: 10px;
  }
  #close-button {
    display: flex;
    background: transparent;
    border: 0;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
}

/*mobile*/
@media (max-width: 500px) {
  #full-screen-image-container {
    width: 95vw;
    height: 70vh;
    position: absolute;
    top: 80px;
    left: 50%;
    margin-left: -47.5vw; /* La mitad de la anchura */
    border-radius: 10px;
  }
  #full-screen-image-container img{
    border-radius: 10px;
  }
  #close-button {
    display: flex;
    background: transparent;
    border: 0;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
}
</style>
