interface TourDate {
  day: string;
  month: string;
  year: string;
  venue: string;
  city: string;
  time: string;
  status: 'available' | 'limited' | 'sold-out';
}

const tourDates: TourDate[] = [
  {
    day: '15',
    month: 'MAR',
    year: '2026',
    venue: 'Große Freiheit 36',
    city: 'Hamburg, Deutschland',
    time: '20:00 Uhr',
    status: 'available',
  },
  {
    day: '22',
    month: 'MAR',
    year: '2026',
    venue: 'Matrix',
    city: 'Bochum, Deutschland',
    time: '19:30 Uhr',
    status: 'limited',
  },
  {
    day: '05',
    month: 'APR',
    year: '2026',
    venue: 'Backstage',
    city: 'München, Deutschland',
    time: '20:00 Uhr',
    status: 'available',
  },
  {
    day: '12',
    month: 'APR',
    year: '2026',
    venue: 'Columbiahalle',
    city: 'Berlin, Deutschland',
    time: '19:00 Uhr',
    status: 'available',
  },
];

const statusText: Record<TourDate['status'], string> = {
  available: 'Tickets verfügbar',
  limited: 'Wenige Tickets',
  'sold-out': 'Ausverkauft',
};

export default function TourSection() {
  return (
    <section id="tour" className="tour-section">
      <h2 className="section-title">Tourtermine</h2>
      <div className="tour-dates">
        {tourDates.map((date, index) => (
          <div key={index} className="tour-date">
            <div className="date-box">
              <span className="day">{date.day}</span>
              <span className="month">{date.month}</span>
              <span className="year">{date.year}</span>
            </div>
            <div className="event-info">
              <h3 className="venue">{date.venue}</h3>
              <p className="city">
                <i className="fas fa-map-marker-alt"></i> {date.city}
              </p>
              <p className="time">
                <i className="far fa-clock"></i> {date.time}
              </p>
            </div>
            <div className="ticket-info">
              <p className={`status ${date.status}`}>{statusText[date.status]}</p>
              {date.status !== 'sold-out' && (
                <a href="#" className="ticket-button">
                  <span>Tickets kaufen</span>
                  <i className="fas fa-ticket-alt"></i>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
