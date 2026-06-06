import { Link } from 'react-router-dom';

export default function ArticleCard({ article, type = 'tips' }) {
  const basePath = type === 'tips' ? '/travel-tips' : '/blog';

  return (
    <Link
      to={`${basePath}/${article.id}`}
      style={{
        display: 'block',
        backgroundColor: 'white',
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-soft)',
        transition: 'all 0.3s ease',
      }}
      className="card-shadow"
    >
      {/* Image */}
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <img
          src={article.image}
          alt={article.title}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        />
        <span
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '12px',
            backgroundColor: 'var(--secondary-teal)',
            color: 'white',
            padding: '0.2rem 0.75rem',
            borderRadius: '50px',
            fontSize: '0.75rem',
            fontWeight: '600',
          }}
        >
          {article.category}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: '1.25rem' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '0.75rem',
            fontSize: '0.8rem',
            color: 'var(--neutral-600)',
          }}
        >
          <span>{article.date}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {article.readTime}
          </span>
        </div>
        <h3
          style={{
            fontSize: '1.1rem',
            fontWeight: '700',
            fontFamily: 'var(--font-family-heading)',
            color: 'var(--neutral-900)',
            marginBottom: '0.5rem',
            lineHeight: 1.3,
          }}
        >
          {article.title}
        </h3>
        <p
          style={{
            fontSize: '0.875rem',
            color: 'var(--neutral-600)',
            lineHeight: 1.6,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {article.excerpt}
        </p>

        <div
          style={{
            marginTop: '1rem',
            color: 'var(--primary-blue)',
            fontWeight: '600',
            fontSize: '0.875rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          Read More
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </Link>
  );
}