import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import DestinationCard from '../components/DestinationCard';
import { popularDestinations, regions, budgetLevels } from '../data/destinations';

export default function DestinationsList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedBudget, setSelectedBudget] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  const filteredDestinations = useMemo(() => {
    let results = [...popularDestinations];

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.country.toLowerCase().includes(q) ||
          d.region.toLowerCase().includes(q)
      );
    }

    // Region filter
    if (selectedRegion !== 'All') {
      results = results.filter((d) => d.region === selectedRegion);
    }

    // Budget filter
    if (selectedBudget !== 'All') {
      results = results.filter((d) => d.budget === selectedBudget);
    }

    // Sort
    if (sortBy === 'name') {
      results.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'rating') {
      results.sort((a, b) => b.rating - a.rating);
    }

    return results;
  }, [searchQuery, selectedRegion, selectedBudget, sortBy]);

  function handleSearch(e) {
    const value = e.target.value;
    setSearchQuery(value);
    if (value) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  }

  return (
    <div style={{ minHeight: '80vh' }}>
      {/* Page Header */}
      <div
        style={{
          background: 'linear-gradient(135deg, var(--primary-blue), var(--primary-blue-dark))',
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
          Explore <span style={{ color: 'var(--secondary-yellow)' }}>Destinations</span>
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', maxWidth: '600px', margin: '0 auto' }}>
          Browse our curated collection of amazing places to visit around the world
        </p>
      </div>

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '2rem 1.5rem',
          display: 'grid',
          gridTemplateColumns: '280px 1fr',
          gap: '2rem',
        }}
        className="destinations-layout"
      >
        {/* Sidebar Filters */}
        <aside
          style={{
            backgroundColor: 'white',
            borderRadius: 'var(--radius)',
            padding: '1.5rem',
            boxShadow: 'var(--shadow-soft)',
            height: 'fit-content',
            position: 'sticky',
            top: '90px',
          }}
        >
          {/* Search */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label
              style={{
                display: 'block',
                fontSize: '0.85rem',
                fontWeight: '700',
                color: 'var(--neutral-900)',
                marginBottom: '0.5rem',
              }}
            >
              Search
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search destinations..."
                style={{
                  width: '100%',
                  padding: '0.6rem 2.25rem 0.6rem 0.75rem',
                  border: '1px solid var(--neutral-300)',
                  borderRadius: 'var(--radius)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  fontFamily: 'var(--font-family-body)',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'var(--primary-blue)')}
                onBlur={(e) => (e.target.style.borderColor = 'var(--neutral-300)')}
              />
              {searchQuery.length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSearchParams({});
                  }}
                  style={{
                    position: 'absolute',
                    right: '8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    border: 'none',
                    backgroundColor: 'var(--neutral-300)',
                    color: 'var(--neutral-600)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    padding: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--accent-red)';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--neutral-300)';
                    e.currentTarget.style.color = 'var(--neutral-600)';
                  }}
                  aria-label="Clear search"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Region Filter */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label
              style={{
                display: 'block',
                fontSize: '0.85rem',
                fontWeight: '700',
                color: 'var(--neutral-900)',
                marginBottom: '0.5rem',
              }}
            >
              Region
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  style={{
                    padding: '0.35rem 0.75rem',
                    borderRadius: '50px',
                    border: 'none',
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    backgroundColor: selectedRegion === region ? 'var(--primary-blue)' : 'var(--neutral-300)',
                    color: selectedRegion === region ? 'white' : 'var(--neutral-600)',
                  }}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Filter */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label
              style={{
                display: 'block',
                fontSize: '0.85rem',
                fontWeight: '700',
                color: 'var(--neutral-900)',
                marginBottom: '0.5rem',
              }}
            >
              Budget
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {budgetLevels.map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedBudget(level)}
                  style={{
                    padding: '0.4rem 0.75rem',
                    borderRadius: 'var(--radius)',
                    border: 'none',
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s ease',
                    backgroundColor: selectedBudget === level ? 'var(--primary-blue)' : 'transparent',
                    color: selectedBudget === level ? 'white' : 'var(--neutral-600)',
                  }}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.85rem',
                fontWeight: '700',
                color: 'var(--neutral-900)',
                marginBottom: '0.5rem',
              }}
            >
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                width: '100%',
                padding: '0.6rem 0.75rem',
                border: '1px solid var(--neutral-300)',
                borderRadius: 'var(--radius)',
                fontSize: '0.9rem',
                outline: 'none',
                fontFamily: 'var(--font-family-body)',
                backgroundColor: 'white',
                cursor: 'pointer',
              }}
            >
              <option value="name">Name (A–Z)</option>
              <option value="rating">Rating (High to Low)</option>
            </select>
          </div>
        </aside>

        {/* Results */}
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.5rem',
            }}
          >
            <p style={{ fontSize: '0.95rem', color: 'var(--neutral-600)' }}>
              Showing <strong style={{ color: 'var(--neutral-900)' }}>{filteredDestinations.length}</strong> destination{filteredDestinations.length !== 1 ? 's' : ''}
            </p>
          </div>

          {filteredDestinations.length > 0 ? (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {filteredDestinations.map((dest) => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </div>
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
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--neutral-300)"
                strokeWidth="1.5"
                style={{ marginBottom: '1rem' }}
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontFamily: 'var(--font-family-heading)',
                  color: 'var(--neutral-900)',
                  marginBottom: '0.5rem',
                }}
              >
                No destinations found
              </h3>
              <p style={{ color: 'var(--neutral-600)' }}>
                Try adjusting your filters or search query
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .destinations-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}