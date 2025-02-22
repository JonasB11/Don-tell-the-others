export default {
    template: `
        <div class="slideshow-container">
            <div v-for="(slide, index) in slides" 
                 :key="index" 
                 class="slide"
                 :class="{ active: currentSlide === index }">
                <img :src="slide.url" :alt="slide.alt">
            </div>
        </div>
    `,
    data() {
        return {
            currentSlide: 0,
            slides: this.$root.galleryImages
        }
    },
    mounted() {
        setInterval(this.nextSlide, 5000)
    },
    methods: {
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.slides.length
        }
    }
} 