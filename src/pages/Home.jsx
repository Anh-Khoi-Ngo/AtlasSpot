import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import DestinationCard from '../components/DestinationCard';
import ArticleCard from '../components/ArticleCard';
import { popularDestinations } from '../data/destinations';
import { travelTips } from '../data/articles';

export default function Home() {
  const featuredDestinations = popularDestinations.slice(0, 6);
  const featuredArticles = travelTips.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Popular Destinations */}
      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '4rem 1.5rem',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: '3rem',
          }}
        >
          <h2
            style={{
              fontSize: '2.25rem',
              fontWeight: '700',
              fontFamily: 'var(--font-family-heading)',
              color: 'var(--neutral-900)',
              marginBottom: '0.75rem',
            }}
          >
            Popular <span style={{ color: 'var(--primary-blue)' }}>Destinations</span>
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--neutral-600)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Hand-picked destinations loved by travelers around the world
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '2rem',
          }}
        >
          {featuredDestinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link
            to="/destinations"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'var(--primary-blue)',
              color: 'white',
              padding: '0.75rem 2rem',
              borderRadius: 'var(--radius)',
              fontWeight: '600',
              fontSize: '1rem',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary-blue-dark)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary-blue)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            View All Destinations
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Why AtlasSpot Section */}
      <section
        style={{
          backgroundColor: 'var(--neutral-100)',
          padding: '4rem 1.5rem',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2
              style={{
                fontSize: '2.25rem',
                fontWeight: '700',
                fontFamily: 'var(--font-family-heading)',
                color: 'var(--neutral-900)',
                marginBottom: '0.75rem',
              }}
            >
              Why <span style={{ color: 'var(--secondary-teal)' }}>AtlasSpot</span>?
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--neutral-600)' }}>
              Everything you need to plan the perfect trip
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary-blue)" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                ),
                title: 'Curated Guides',
                description: 'In-depth guides for destinations worldwide, written by seasoned travelers.',
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-teal)" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                ),
                title: 'Comprehensive Info',
                description: 'Weather, budget tips, things to do — all the details in one place.',
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-red)" strokeWidth="1.5">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                ),
                title: 'Save Favorites',
                description: 'Create your personalized travel wishlist and plan trips effortlessly.',
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-yellow)" strokeWidth="1.5">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                ),
                title: 'Travel Blog',
                description: 'SEO-rich articles with insider tips, budget hacks, and packing guides.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                style={{
                  backgroundColor: 'white',
                  padding: '2rem',
                  borderRadius: 'var(--radius)',
                  textAlign: 'center',
                  boxShadow: 'var(--shadow-soft)',
                  transition: 'all 0.3s ease',
                }}
                className="card-shadow"
              >
                <div style={{ marginBottom: '1rem' }}>{feature.icon}</div>
                <h3
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: '700',
                    fontFamily: 'var(--font-family-heading)',
                    color: 'var(--neutral-900)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--neutral-600)',
                    lineHeight: 1.6,
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips Preview */}
      <section
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '4rem 1.5rem',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: '2.25rem',
              fontWeight: '700',
              fontFamily: 'var(--font-family-heading)',
              color: 'var(--neutral-900)',
              marginBottom: '0.75rem',
            }}
          >
            Travel <span style={{ color: 'var(--secondary-teal)' }}>Tips</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--neutral-600)' }}>
            Expert advice to make your journeys smoother
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {featuredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} type="tips" />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link
            to="/travel-tips"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'var(--secondary-teal)',
              color: 'white',
              padding: '0.75rem 2rem',
              borderRadius: 'var(--radius)',
              fontWeight: '600',
              fontSize: '1rem',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#00897B';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--secondary-teal)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            View All Tips
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}