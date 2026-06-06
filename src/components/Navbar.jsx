import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Show, SignInButton, UserButton } from '@clerk/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'Travel Tips', path: '/travel-tips' },
  { name: 'Blog', path: '/blog' },
  { name: 'Favorites', path: '/favorites' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  function isActive(path) {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  }

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--neutral-300)',
        boxShadow: 'var(--shadow-soft)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '70px',
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img
            src="/atlasspot-logo.png"
            alt="AtlasSpot"
            style={{ height: '40px', width: 'auto' }}
          />
          <span
            style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              fontFamily: 'var(--font-family-heading)',
              color: 'var(--primary-blue)',
            }}
          >
            Atlas<span style={{ color: 'var(--accent-red)' }}>Spot</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                fontSize: '0.95rem',
                fontWeight: isActive(link.path) ? '700' : '500',
                color: isActive(link.path) ? 'var(--primary-blue)' : 'var(--neutral-600)',
                borderBottom: isActive(link.path)
                  ? '2px solid var(--primary-blue)'
                  : '2px solid transparent',
                paddingBottom: '0.25rem',
                transition: 'all 0.2s ease',
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Auth + Mobile Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Show when="signed-out">
            <SignInButton mode="modal">
              <button
                style={{
                  backgroundColor: 'var(--primary-blue)',
                  color: 'white',
                  padding: '0.5rem 1.25rem',
                  borderRadius: 'var(--radius)',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = 'var(--primary-blue-dark)')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = 'var(--primary-blue)')}
              >
                Sign In
              </button>
            </SignInButton>
          </Show>
          <Show when="signed-in">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: { width: '36px', height: '36px' },
                },
              }}
            />
          </Show>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              color: 'var(--neutral-900)',
            }}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            padding: '1rem 1.5rem',
            borderTop: '1px solid var(--neutral-300)',
            backgroundColor: 'white',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '0.75rem 0',
                fontSize: '1rem',
                fontWeight: isActive(link.path) ? '700' : '500',
                color: isActive(link.path) ? 'var(--primary-blue)' : 'var(--neutral-600)',
                borderBottom: '1px solid var(--neutral-300)',
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}