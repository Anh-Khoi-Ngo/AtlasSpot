import { Link } from 'react-router-dom';
import { useFavorites } from '../context/useFavorites';
import { useAuth } from '@clerk/react';
import { useState } from 'react';

export default function DestinationCard({ destination }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { isSignedIn } = useAuth();
  const liked = isFavorite(destination.id);
  const [showToast, setShowToast] = useState(false);

  function handleLikeClick(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!isSignedIn) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 1000);
      return;
    }
    toggleFavorite(destination.id);
  }

  return (
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-soft)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        position: 'relative',
      }}
      className="card-shadow"
    >
      {/* Image */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <Link to={`/destinations/${destination.id}`}>
          <img
            src={destination.image}
            alt={destination.name}
            style={{
              width: '100%',
              height: '220px',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          />
        </Link>

        {/* Region Badge */}
        <span
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            backgroundColor: 'var(--primary-blue)',
            color: 'white',
            padding: '0.25rem 0.75rem',
            borderRadius: '50px',
            fontSize: '0.75rem',
            fontWeight: '600',
          }}
        >
          {destination.region}
        </span>

        {/* Favorite Button */}
        <button
          onClick={handleLikeClick}
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.9)',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            }}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          aria-label={liked ? 'Remove from favorites' : 'Add to favorites'}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={liked ? 'var(--accent-red)' : 'none'}
            stroke={liked ? 'var(--accent-red)' : 'var(--neutral-600)'}
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>

      {/* Sign-in Toast Notification (centered on image) */}
      {showToast && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0,0,0,0.8)',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: 'var(--radius)',
            fontSize: '0.85rem',
            fontWeight: '600',
            boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
            zIndex: 20,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            whiteSpace: 'nowrap',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-yellow)" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          Sign in to save favorites
        </div>
      )}
      </div>

      {/* Content */}
      <Link to={`/destinations/${destination.id}`} style={{ display: 'block', padding: '1.25rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
          <h3
            style={{
              fontSize: '1.2rem',
              fontWeight: '700',
              fontFamily: 'var(--font-family-heading)',
              color: 'var(--neutral-900)',
            }}
          >
            {destination.name}
          </h3>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              flexShrink: 0,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--secondary-yellow)" stroke="none">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--neutral-600)' }}>
              {destination.rating}
            </span>
          </div>
        </div>
        <p
          style={{
            fontSize: '0.85rem',
            color: 'var(--neutral-600)',
            lineHeight: '1.6',
            marginBottom: '0.75rem',
          }}
        >
          {destination.country}
        </p>
        <p
          style={{
            fontSize: '0.85rem',
            color: 'var(--neutral-600)',
            lineHeight: '1.6',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {destination.description}
        </p>
      </Link>
    </div>
  );
}