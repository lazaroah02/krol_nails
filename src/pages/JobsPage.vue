<template>
  <NavBar />
  <main id="jobs-page-container">
    <JobsImagesGrid
      :setSelectedImage="setSelectedImage"
      :jobsImages="jobsImages"
      :blurElement="showFullScreenImage && windowSize < 900"
    />
    <FullScreenImage
      :image="selectedImage"
      :setSelectedImageById="setSelectedImageById"
      :showFullScreenImage = "showFullScreenImage"
      :setShowFullScreenImage = "setShowFullScreenImage"
    />
</main>
</template>

<script>
import { defineComponent, ref } from "vue";
import NavBar from "../components/NavBar.vue";
import JobsImagesGrid from "../components/JobsImagesGrid.vue";
import FullScreenImage from "../components/FullScreenImage.vue";
import { jobsImages } from "../jobs_images_urls.js";

export default defineComponent({
    setup() {
        const windowSize = ref(window.innerWidth)
        const selectedImage = ref(jobsImages[0]);
        const showFullScreenImage = ref(windowSize.value >= 900?true:false)
        return { selectedImage, jobsImages, showFullScreenImage, windowSize };
    },
    components: {
        NavBar,
        JobsImagesGrid,
        FullScreenImage,
    },
    methods: {
        setSelectedImage(image) {
            this.selectedImage = image;
            this.setShowFullScreenImage(true)
        },
        setSelectedImageById(idImage) {
            if (idImage >= 1 && idImage <= this.jobsImages.length) {
                this.selectedImage = this.jobsImages[idImage - 1];
            }
        },
        setShowFullScreenImage(value){
            this.showFullScreenImage = value
        }
    },
    mounted() {
        const mql = window.matchMedia('(min-width: 900px)');
        mql.addEventListener('change', (event) => {
            if (event.matches) {
                this.setShowFullScreenImage(true)
                this.windowSize = 950
            }
            else{
                this.windowSize = 850
            }
        });
    }
  
});
</script>

<style scoped>
#jobs-page-container {
  display: flex;
  flex-direction: row;
  padding: 5px;
  padding-top: 10px;
}
</style>
