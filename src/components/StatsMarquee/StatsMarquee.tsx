import './StatsMarquee.css';

const stats = [
  { value: '100+', label: 'Unique Drinks' },
  { value: '15K+', label: 'Happy Customers' },
  { value: '100%', label: 'Fresh Ingredients' },
  { value: '☕', label: 'Roasted Daily' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '7AM', label: 'Open Every Day' },
];

export const StatsMarquee = () => {
  return (
    <div className="stats-marquee-section">
      <div className="stats-marquee-track">
        {[...Array(4)].map((_, loopIdx) => (
          <div className="stats-marquee-group" key={loopIdx}>
            {stats.map((stat, i) => (
              <div className="stat-item" key={`${loopIdx}-${i}`}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
