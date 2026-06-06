import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar({ onSearch, placeholder = 'Search destinations, countries, or cities...' }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    } else {
      navigate(`/destinations?search=${encodeURIComponent(query)}`);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        width: '100%',
        maxWidth: '640px',
        backgroundColor: 'white',
        borderRadius: '50px',
        overflow: 'hidden',
        boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
      }}
    >
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          padding: '0 1.5rem',
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--neutral-600)"
          strokeWidth="2"
          strokeLinecap="round"
          style={{ marginRight: '0.75rem', flexShrink: 0 }}
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          style={{
            flex: 1,
            padding: '1rem 0',
            border: 'none',
            outline: 'none',
            fontSize: '1rem',
            fontFamily: 'var(--font-family-body)',
            color: 'var(--neutral-900)',
            backgroundColor: 'transparent',
          }}
        />
      </div>
      <button
        type="submit"
        style={{
          backgroundColor: 'var(--primary-blue)',
          color: 'white',
          padding: '0 2rem',
          border: 'none',
          fontWeight: '600',
          fontSize: '0.95rem',
          cursor: 'pointer',
          transition: 'background-color 0.2s ease',
          fontFamily: 'var(--font-family-body)',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = 'var(--primary-blue-dark)')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = 'var(--primary-blue)')}
      >
        Search
      </button>
    </form>
  );
}