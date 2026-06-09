import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { popularDestinations } from '../data/destinations';
import { getCountryByName } from '../api/countries';
import { useFavorites } from '../context/useFavorites';
import { SignInButton, useAuth } from '@clerk/react';

export default function DestinationDetail() {
  const { id } = useParams();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { isSignedIn } = useAuth();
  const destination = popularDestinations.find((d) => d.id === id);
  const [countryData, setCountryData] = useState(null);
  const [loadingApi, setLoadingApi] = useState(() => !!destination);

  useEffect(() => {
    if (destination) {
      getCountryByName(destination.country)
        .then((data) => {
          setCountryData(data);
        })
        .finally(() => setLoadingApi(false));
    }
  }, [destination]);

  if (!destination) {
    return (
      <div
        style={{
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
        }}
      >
        <h2 style={{ fontFamily: 'var(--font-family-heading)', marginBottom: '1rem' }}>
          Destination not found
        </h2>
        <Link
          to="/destinations"
          style={{
            backgroundColor: 'var(--primary-blue)',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: 'var(--radius)',
            fontWeight: '600',
          }}
        >
          Back to Destinations
        </Link>
      </div>
    );
  }

  const liked = isFavorite(destination.id);

  const seasonIcons = {
    spring: '🌸',
    summer: '☀️',
    autumn: '🍂',
    winter: '❄️',
  };

  return (
    <div style={{ minHeight: '80vh' }}>
      {/* Hero Banner */}
      <div
        style={{
          position: 'relative',
          height: '50vh',
          minHeight: '350px',
          overflow: 'hidden',
        }}
      >
        <img
          src={destination.image}
          alt={destination.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '2rem',
            right: '2rem',
          }}
        >
          {/* Breadcrumb */}
          <div style={{ marginBottom: '0.75rem' }}>
            <Link
              to="/destinations"
              style={{
                color: 'rgba(255,255,255,0.8)',
                fontSize: '0.85rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Back to Destinations
            </Link>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h1
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: '700',
                  fontFamily: 'var(--font-family-heading)',
                  color: 'white',
                  marginBottom: '0.5rem',
                  textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                }}
              >
                {destination.name}
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <span
                  style={{
                    color: 'white',
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {destination.country}
                </span>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    color: 'var(--secondary-yellow)',
                    fontWeight: '600',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--secondary-yellow)" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  {destination.rating}
                </span>
                <span
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    padding: '0.2rem 0.75rem',
                    borderRadius: '50px',
                    color: 'white',
                    fontSize: '0.8rem',
                  }}
                >
                  {destination.region}
                </span>
              </div>
            </div>

            {isSignedIn ? (
              <button
                onClick={() => toggleFavorite(destination.id)}
                style={{
                  backgroundColor: liked ? 'var(--accent-red)' : 'rgba(255,255,255,0.2)',
                  color: 'white',
                  padding: '0.7rem 1.5rem',
                  borderRadius: 'var(--radius)',
                  border: 'none',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.95rem',
                  transition: 'all 0.2s ease',
                  backdropFilter: 'blur(4px)',
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill={liked ? 'white' : 'none'}
                  stroke={liked ? 'white' : 'currentColor'}
                  strokeWidth="2"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                {liked ? 'Saved' : 'Save'}
              </button>
            ) : (
              <SignInButton mode="modal">
                <button
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    color: 'white',
                    padding: '0.7rem 1.5rem',
                    borderRadius: 'var(--radius)',
                    border: 'none',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.95rem',
                    transition: 'all 0.2s ease',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  Sign in to Save
                </button>
              </SignInButton>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '2.5rem 1.5rem',
        }}
      >
        {/* Description */}
        <section style={{ marginBottom: '3rem' }}>
          <p
            style={{
              fontSize: '1.15rem',
              lineHeight: 1.8,
              color: 'var(--neutral-600)',
            }}
          >
            {destination.description}
          </p>
        </section>

        {/* Quick Info Cards from API */}
        {countryData && (
          <section style={{ marginBottom: '3rem' }}>
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                fontFamily: 'var(--font-family-heading)',
                color: 'var(--neutral-900)',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              🌍 Country Information
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
              }}
            >
              {countryData.capital && countryData.capital[0] && (
                <div
                  style={{
                    backgroundColor: 'white',
                    padding: '1.25rem',
                    borderRadius: 'var(--radius)',
                    boxShadow: 'var(--shadow-soft)',
                  }}
                >
                  <div style={{ fontSize: '0.8rem', color: 'var(--neutral-600)', marginBottom: '0.25rem' }}>Capital</div>
                  <div style={{ fontWeight: '700', color: 'var(--neutral-900)', fontSize: '1.05rem' }}>
                    {countryData.capital[0]}
                  </div>
                </div>
              )}
              {countryData.population && (
                <div
                  style={{
                    backgroundColor: 'white',
                    padding: '1.25rem',
                    borderRadius: 'var(--radius)',
                    boxShadow: 'var(--shadow-soft)',
                  }}
                >
                  <div style={{ fontSize: '0.8rem', color: 'var(--neutral-600)', marginBottom: '0.25rem' }}>Population</div>
                  <div style={{ fontWeight: '700', color: 'var(--neutral-900)', fontSize: '1.05rem' }}>
                    {countryData.population.toLocaleString()}
                  </div>
                </div>
              )}
              {countryData.currencies && (
                <div
                  style={{
                    backgroundColor: 'white',
                    padding: '1.25rem',
                    borderRadius: 'var(--radius)',
                    boxShadow: 'var(--shadow-soft)',
                  }}
                >
                  <div style={{ fontSize: '0.8rem', color: 'var(--neutral-600)', marginBottom: '0.25rem' }}>Currency</div>
                  <div style={{ fontWeight: '700', color: 'var(--neutral-900)', fontSize: '1.05rem' }}>
                    {Object.values(countryData.currencies)
                      .map((c) => `${c.name} (${c.symbol || ''})`)
                      .join(', ')}
                  </div>
                </div>
              )}
              {countryData.languages && (
                <div
                  style={{
                    backgroundColor: 'white',
                    padding: '1.25rem',
                    borderRadius: 'var(--radius)',
                    boxShadow: 'var(--shadow-soft)',
                  }}
                >
                  <div style={{ fontSize: '0.8rem', color: 'var(--neutral-600)', marginBottom: '0.25rem' }}>Languages</div>
                  <div style={{ fontWeight: '700', color: 'var(--neutral-900)', fontSize: '1.05rem' }}>
                    {Object.values(countryData.languages).join(', ')}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {loadingApi && (
          <div
            style={{
              textAlign: 'center',
              padding: '2rem',
              color: 'var(--neutral-600)',
              fontSize: '0.9rem',
            }}
          >
            Loading country data...
          </div>
        )}

        {/* Weather */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              fontFamily: 'var(--font-family-heading)',
              color: 'var(--neutral-900)',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            🌤️ Weather by Season
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
            }}
          >
            {Object.entries(destination.weather).map(([season, info]) => (
              <div
                key={season}
                style={{
                  backgroundColor: 'white',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius)',
                  boxShadow: 'var(--shadow-soft)',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{seasonIcons[season]}</div>
                <div
                  style={{
                    fontWeight: '700',
                    textTransform: 'capitalize',
                    color: 'var(--neutral-900)',
                    marginBottom: '0.25rem',
                    fontSize: '1rem',
                  }}
                >
                  {season}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--neutral-600)' }}>{info}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Things to Do */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              fontFamily: 'var(--font-family-heading)',
              color: 'var(--neutral-900)',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            🎯 Things to Do
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '0.75rem',
            }}
          >
            {destination.thingsToDo.map((thing, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'white',
                  padding: '1rem 1.25rem',
                  borderRadius: 'var(--radius)',
                  boxShadow: 'var(--shadow-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary-blue-light)',
                    color: 'var(--primary-blue-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700',
                    fontSize: '0.8rem',
                    flexShrink: 0,
                  }}
                >
                  {index + 1}
                </div>
                <span style={{ fontSize: '0.95rem', color: 'var(--neutral-900)' }}>{thing}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Best Time to Visit */}
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              fontFamily: 'var(--font-family-heading)',
              color: 'var(--neutral-900)',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            📅 Best Time to Visit
          </h2>
          <div
            style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: 'var(--radius)',
              boxShadow: 'var(--shadow-soft)',
              borderLeft: '4px solid var(--secondary-teal)',
            }}
          >
            <p style={{ fontSize: '1.1rem', color: 'var(--neutral-900)', fontWeight: '600' }}>
              {destination.bestTimeToVisit}
            </p>
            <div
              style={{
                display: 'flex',
                gap: '1.5rem',
                marginTop: '1rem',
                flexWrap: 'wrap',
                fontSize: '0.9rem',
                color: 'var(--neutral-600)',
              }}
            >
              <span>💰 Budget: {destination.budget}</span>
              <span>🗣️ Language: {destination.language}</span>
              <span>💱 Currency: {destination.currency}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}