import Image from 'next/image';

interface GalleryItem {
  image: string;
  title: string;
  location: string;
}

const galleryItems: GalleryItem[] = [
  { image: '/pics/band/band_crowd.jpeg', title: 'Live Performance', location: 'Open Air Festival' },
  { image: '/pics/band/Band_front.jpg', title: 'Bandaufnahme', location: 'Fotoshooting' },
  { image: '/pics/band/Band_light.jpg', title: 'Bühnenshow', location: 'Sommertour' },
  { image: '/pics/band/band_louis-flo.jpeg', title: 'Backstage', location: 'Tour 2024' },
  { image: '/pics/band/band_nice-light.jpeg', title: 'Lichtshow', location: 'Club Tour' },
  { image: '/pics/band/band_pascal_go.jpeg', title: 'Drumming Action', location: 'Live Konzert' },
  { image: '/pics/band/Band_Pascal.jpg', title: 'Pascal Solo', location: 'Studio Session' },
  { image: '/pics/band/band_seb-solo.jpeg', title: 'Sebastian Solo', location: 'Akustik Set' },
  { image: '/pics/band/band_trio.jpeg', title: 'Trio Performance', location: 'Club Gig' },
  { image: '/pics/band/band_wave.jpeg', title: 'Publikumsmoment', location: 'Festival' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <h2 className="section-title">Konzertfotos</h2>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div key={index} className="gallery-item">
            <Image
              src={item.image}
              alt={item.title}
              width={600}
              height={338}
              style={{ objectFit: 'cover' }}
            />
            <div className="gallery-overlay">
              <div className="gallery-info">
                <h3>{item.title}</h3>
                <p>{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
