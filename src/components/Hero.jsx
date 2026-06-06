import SearchBar from './SearchBar';

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)',
        }}
      />

      {/* Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
        }}
        className="hero-overlay"
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '2rem',
          maxWidth: '800px',
          width: '100%',
        }}
        className="animate-fade-in"
      >
        <h1
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '700',
            color: 'white',
            fontFamily: 'var(--font-family-heading)',
            marginBottom: '1rem',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            lineHeight: 1.2,
          }}
        >
          Discover Your Next
          <br />
          <span style={{ color: 'var(--secondary-yellow)' }}>Adventure</span>
        </h1>

        <p
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '2.5rem',
            lineHeight: 1.7,
            maxWidth: '600px',
            margin: '0 auto 2.5rem',
          }}
        >
          Explore breathtaking destinations, get insider travel tips, and plan the perfect trip — all in one place.
        </p>

        {/* Search Bar */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <SearchBar />
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            marginTop: '3rem',
            flexWrap: 'wrap',
          }}
        >
          {[
            { number: '120+', label: 'Destinations' },
            { number: '50+', label: 'Countries' },
            { number: '10K+', label: 'Happy Travelers' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '1.75rem',
                  fontWeight: '700',
                  color: 'var(--secondary-yellow)',
                  fontFamily: 'var(--font-family-heading)',
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255,255,255,0.8)',
                  fontWeight: '500',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Wave */}
      <div
        style={{
          position: 'absolute',
          bottom: -2,
          left: 0,
          width: '100%',
        }}
      >
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,60 C360,100 720,20 1080,60 C1260,80 1380,50 1440,60 L1440,100 L0,100 Z"
            fill="var(--neutral-200)"
          />
        </svg>
      </div>
    </section>
  );
}