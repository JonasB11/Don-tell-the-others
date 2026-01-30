import Image from 'next/image';

interface BandMember {
  name: string;
  role: string;
  image: string;
}

const bandMembers: BandMember[] = [
  { name: 'Lea', role: 'Gesang', image: '/pics/band_members/lea.png' },
  { name: 'Flo', role: 'E-Gitarre', image: '/pics/band_members/flo.png' },
  { name: 'Sebastian', role: 'Gitarre', image: '/pics/band_members/sebastian.png' },
  { name: 'Louis', role: 'Bass', image: '/pics/band_members/louis.png' },
  { name: 'Pascal', role: 'Schlagzeug', image: '/pics/band_members/pascal.png' },
];

export default function BandSection() {
  return (
    <section id="band" className="band-section">
      <h2 className="section-title">Die Band</h2>
      <div className="members-grid">
        {bandMembers.map((member) => (
          <div key={member.name} className="member">
            <div className="member-image">
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={400}
                style={{ objectFit: 'cover' }}
              />
              <div className="member-overlay">
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
