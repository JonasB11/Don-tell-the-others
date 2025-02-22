import { createApp } from 'vue'
import { bandMembers } from './data/band-members.js'
import { socialLinks } from './data/social-links.js'
import { galleryImages } from './data/gallery-images.js'

// Import components
import SlideshowComponent from './components/slideshow.js'
import BandMembersComponent from './components/band-members.js'
import PerformancesComponent from './components/performances.js'
import GalleryComponent from './components/gallery.js'
import ContactComponent from './components/contact.js'
import MusicPlayerComponent from './components/music-player.js'

const app = createApp({
    data() {
        return {
            bandName: 'Don\'t tell the others',
            bandMembers,
            socialLinks,
            galleryImages
        }
    }
})

// Register components
app.component('slideshow-component', SlideshowComponent)
app.component('band-members-component', BandMembersComponent)
app.component('performances-component', PerformancesComponent)
app.component('gallery-component', GalleryComponent)
app.component('contact-component', ContactComponent)
app.component('music-player-component', MusicPlayerComponent)

app.mount('#app') 