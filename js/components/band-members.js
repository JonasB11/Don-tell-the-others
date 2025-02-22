export default {
    template: `
        <section class="section">
            <div class="container">
                <h2 class="section-title">The Band</h2>
                <div class="members-grid">
                    <div v-for="member in members" 
                         :key="member.name" 
                         class="member-card">
                        <img :src="member.image" :alt="member.name">
                        <h3>{{ member.name }}</h3>
                        <p>{{ member.instrument }}</p>
                    </div>
                </div>
            </div>
        </section>
    `,
    data() {
        return {
            members: this.$root.bandMembers
        }
    }
} 