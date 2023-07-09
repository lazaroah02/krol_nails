<template>
  <div id = "jobs-container">
    <div id="jobs-images-grid-container" :class = "blurElement? 'blur-element':null">
        <div
          id="job-image"
          v-for="image in jobsImages"
          :key="image.id"
          @click="setSelectedImage(image)"
        >
          <img :src="image.url" alt="" />
        </div>
        <div class = "separator"></div>
        <div class = "separator"></div>
        <div class = "separator"></div>
    </div>
    <ContactButtons />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ContactButtons from './ContactButtons.vue'

export default defineComponent({
    components:{
        ContactButtons,
    },
    props: {
        setSelectedImage: Function,
        jobsImages: Array,
        blurElement: Boolean,
    },
});
</script>

<style scoped>
#jobs-container{
    width: 50%;
    max-height: 90vh;
}
#jobs-images-grid-container {
  width: 100%;
  max-height: 90vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(158px, 1fr));
  align-items: center center;
  gap: 5px;
  overflow-y: auto;
}
#jobs-images-grid-container::-webkit-scrollbar{
    color: #DC7782;
}
#jobs-images-grid-container::-webkit-scrollbar-thumb {
  background-color: #DC7782;
  border-radius: 20px;
  border: 3px solid #f5f5f5;
}
.buttons-container-width{
    width: 50%;
}
#job-image img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.blur-element{
    filter:blur(5px);
}
.separator{
    height: 80px;
    width: 100%;
}

/*Mobile and Tablet*/
@media (max-width:900px){
    #jobs-container{
        width: 100%;
        max-height: 90vh;
    }
    #jobs-images-grid-container::-webkit-scrollbar{
        display: none;
    }
    .buttons-container-width{
        width: 100%;
    }
}
</style>
