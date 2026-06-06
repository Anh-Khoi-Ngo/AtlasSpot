import { useParams, Link } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import { travelTips } from '../data/articles';

function ArticleDetail({ article }) {
  return (
    <div style={{ minHeight: '80vh' }}>
      {/* Hero */}
      <div style={{ position: 'relative', height: '45vh', minHeight: '300px', overflow: 'hidden' }}>
        <img
          src={article.image}
          alt={article.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)',
          }}
        />
        <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem', maxWidth: '800px' }}>
          <Link
            to="/travel-tips"
            style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Travel Tips
          </Link>
          <span
            style={{
              display: 'inline-block',
              backgroundColor: 'var(--secondary-teal)',
              color: 'white',
              padding: '0.2rem 0.75rem',
              borderRadius: '50px',
              fontSize: '0.75rem',
              fontWeight: '600',
              marginBottom: '0.75rem',
            }}
          >
            {article.category}
          </span>
          <h1
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              fontWeight: '700',
              fontFamily: 'var(--font-family-heading)',
              color: 'white',
              textShadow: '0 2px 8px rgba(0,0,0,0.3)',
              lineHeight: 1.2,
            }}
          >
            {article.title}
          </h1>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.75rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>
            <span>{article.author}</span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '750px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.9,
            color: 'var(--neutral-600)',
          }}
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </div>
  );
}

export default function TravelTips() {
  const { articleId } = useParams();

  // If viewing a specific article
  if (articleId) {
    const article = travelTips.find((a) => a.id === articleId);
    if (!article) {
      return (
        <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
          <h2 style={{ fontFamily: 'var(--font-family-heading)', marginBottom: '1rem' }}>Article not found</h2>
          <Link to="/travel-tips" style={{ backgroundColor: 'var(--primary-blue)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: 'var(--radius)', fontWeight: '600' }}>
            Back to Travel Tips
          </Link>
        </div>
      );
    }
    return <ArticleDetail article={article} />;
  }

  // Tips list page
  return (
    <div style={{ minHeight: '80vh' }}>
      {/* Header */}
      <div
        style={{
          background: 'linear-gradient(135deg, var(--secondary-teal), #00897B)',
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
          Travel <span style={{ color: 'var(--secondary-yellow)' }}>Tips</span>
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', maxWidth: '600px', margin: '0 auto' }}>
          Expert advice and insider knowledge to help you travel smarter
        </p>
      </div>

      {/* Articles Grid */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {travelTips.map((article) => (
            <ArticleCard key={article.id} article={article} type="tips" />
          ))}
        </div>
      </div>
    </div>
  );
}