import { Show, SignInButton } from '@clerk/react';
import DestinationCard from '../components/DestinationCard';
import { popularDestinations } from '../data/destinations';
import { useFavorites } from '../context/useFavorites';

function FavoritesContent() {
  const { favorites } = useFavorites();

  const favoriteDestinations = popularDestinations.filter((d) =>
    favorites.includes(d.id)
  );

  return (
    <div style={{ minHeight: '80vh' }}>
      {/* Header */}
      <div
        style={{
          background: 'linear-gradient(135deg, var(--accent-red), var(--accent-red-dark))',
          padding: '3rem 1.5rem',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            fontFamily: 'var(--font-family-heading)',
            color: 'white',
            marginBottom: '0.75rem',
          }}
        >
          My <span style={{ color: 'var(--secondary-yellow)' }}>Favorites</span>
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', maxWidth: '600px', margin: '0 auto' }}>
          Your personal travel wishlist — destinations you love and plan to visit
        </p>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        {favoriteDestinations.length > 0 ? (
          <>
            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--neutral-600)',
                marginBottom: '1.5rem',
              }}
            >
              You have{' '}
              <strong style={{ color: 'var(--neutral-900)' }}>
                {favoriteDestinations.length}
              </strong>{' '}
              saved destination{favoriteDestinations.length !== 1 ? 's' : ''}
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                gap: '2rem',
              }}
            >
              {favoriteDestinations.map((dest) => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </div>
          </>
        ) : (
          <div
            style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              backgroundColor: 'white',
              borderRadius: 'var(--radius)',
              boxShadow: 'var(--shadow-soft)',
            }}
          >
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--neutral-300)"
              strokeWidth="1"
              style={{ marginBottom: '1.5rem' }}
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <h3
              style={{
                fontSize: '1.5rem',
                fontFamily: 'var(--font-family-heading)',
                color: 'var(--neutral-900)',
                marginBottom: '0.75rem',
              }}
            >
              No favorites yet
            </h3>
            <p
              style={{
                color: 'var(--neutral-600)',
                maxWidth: '400px',
                margin: '0 auto 1.5rem',
                lineHeight: 1.6,
              }}
            >
              Start exploring destinations and click the heart icon to save them here. Your favorites will be waiting whenever you come back!
            </p>
            <a
              href="/destinations"
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
            >
              Explore Destinations
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Favorites() {
  return (
    <>
      <Show when="signed-in">
        <FavoritesContent />
      </Show>
      <Show when="signed-out">
        <div
          style={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '3rem',
              borderRadius: 'var(--radius)',
              boxShadow: 'var(--shadow-medium)',
              maxWidth: '480px',
              width: '100%',
            }}
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--accent-red)"
              strokeWidth="1.5"
              style={{ marginBottom: '1.5rem' }}
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <h2
              style={{
                fontSize: '1.75rem',
                fontFamily: 'var(--font-family-heading)',
                color: 'var(--neutral-900)',
                marginBottom: '0.75rem',
              }}
            >
              Sign in to view your favorites
            </h2>
            <p
              style={{
                color: 'var(--neutral-600)',
                marginBottom: '1.5rem',
                lineHeight: 1.6,
              }}
            >
              Create an account or sign in to save your favorite destinations and build your personal travel wishlist.
            </p>
            <SignInButton mode="modal">
              <button
                style={{
                  backgroundColor: 'var(--primary-blue)',
                  color: 'white',
                  padding: '0.75rem 2rem',
                  borderRadius: 'var(--radius)',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = 'var(--primary-blue-dark)')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = 'var(--primary-blue)')}
              >
                Sign In
              </button>
            </SignInButton>
          </div>
        </div>
      </Show>
    </>
  );
}