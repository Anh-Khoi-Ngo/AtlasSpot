import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--neutral-900)',
        color: 'var(--neutral-300)',
        padding: '3rem 1.5rem 1.5rem',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem',
          marginBottom: '2.5rem',
        }}
      >
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <img src="/atlasspot-logo.png" alt="AtlasSpot" style={{ height: '32px' }} />
            <span
              style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                fontFamily: 'var(--font-family-heading)',
                color: 'var(--primary-blue-light)',
              }}
            >
              Atlas<span style={{ color: 'var(--secondary-teal)' }}>Spot</span>
            </span>
          </div>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: '#aaa' }}>
            Discover the world's most amazing destinations. Plan your next adventure with curated travel guides and insider tips.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4
            style={{
              fontSize: '1rem',
              fontWeight: '700',
              color: 'white',
              marginBottom: '1rem',
              fontFamily: 'var(--font-family-heading)',
            }}
          >
            Explore
          </h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              { name: 'Destinations', path: '/destinations' },
              { name: 'Travel Tips', path: '/travel-tips' },
              { name: 'Blog', path: '/blog' },
              { name: 'Favorites', path: '/favorites' },
            ].map((item) => (
              <li key={item.path} style={{ marginBottom: '0.5rem' }}>
                <Link
                  to={item.path}
                  style={{
                    color: '#aaa',
                    fontSize: '0.9rem',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--primary-blue-light)')}
                  onMouseLeave={(e) => (e.target.style.color = '#aaa')}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Top Destinations */}
        <div>
          <h4
            style={{
              fontSize: '1rem',
              fontWeight: '700',
              color: 'white',
              marginBottom: '1rem',
              fontFamily: 'var(--font-family-heading)',
            }}
          >
            Top Destinations
          </h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {['Paris, France', 'Tokyo, Japan', 'Bali, Indonesia', 'Rome, Italy'].map((dest) => (
              <li key={dest} style={{ marginBottom: '0.5rem' }}>
                <Link
                  to="/destinations"
                  style={{
                    color: '#aaa',
                    fontSize: '0.9rem',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--primary-blue-light)')}
                  onMouseLeave={(e) => (e.target.style.color = '#aaa')}
                >
                  {dest}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4
            style={{
              fontSize: '1rem',
              fontWeight: '700',
              color: 'white',
              marginBottom: '1rem',
              fontFamily: 'var(--font-family-heading)',
            }}
          >
            Stay Updated
          </h4>
          <p style={{ fontSize: '0.9rem', color: '#aaa', marginBottom: '1rem' }}>
            Get travel inspiration delivered to your inbox.
          </p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input
              type="email"
              placeholder="Your email"
              style={{
                flex: 1,
                padding: '0.6rem 0.75rem',
                borderRadius: 'var(--radius)',
                border: '1px solid #444',
                backgroundColor: '#333',
                color: 'white',
                fontSize: '0.875rem',
                outline: 'none',
              }}
            />
            <button
              style={{
                backgroundColor: 'var(--primary-blue)',
                color: 'white',
                padding: '0.6rem 1rem',
                borderRadius: 'var(--radius)',
                border: 'none',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '0.875rem',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = 'var(--primary-blue-dark)')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = 'var(--primary-blue)')}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          borderTop: '1px solid #444',
          paddingTop: '1.5rem',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '0.875rem', color: '#888' }}>
          © {new Date().getFullYear()} AtlasSpot. All rights reserved.
        </p>
      </div>
    </footer>
  );
}